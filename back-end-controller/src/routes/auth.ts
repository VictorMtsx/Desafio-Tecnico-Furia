import type { FastifyPluginAsync } from 'fastify'
import axios from 'axios'
import { env } from '../env.ts'
import crypto from 'crypto'

// Configuração do PKCE
function generatePKCE() {
  const codeVerifier = crypto.randomBytes(32).toString('hex')
  const codeChallenge = crypto
    .createHash('sha256')
    .update(codeVerifier)
    .digest('base64url') // Usar base64url é crucial

  return { codeVerifier, codeChallenge }
}

declare module 'fastify' {
  interface Session {
    codeVerifier: string
    oauth_state: string
  }
}

const authRoutes: FastifyPluginAsync = async app => {
  const { CLIENT_SECRET, CLIENT_ID, REDIRECT_URI } = env

  app.get('/login', async (request, reply) => {
    const { codeVerifier, codeChallenge } = generatePKCE()
    const state = crypto.randomBytes(16).toString('hex')

    // Armazena ambos na sessão
    request.session.codeVerifier = codeVerifier
    request.session.oauth_state = state

    const twitterUrl = new URL('https://twitter.com/i/oauth2/authorize')
    twitterUrl.searchParams.append('response_type', 'code')
    twitterUrl.searchParams.append('client_id', CLIENT_ID!)
    twitterUrl.searchParams.append('redirect_uri', REDIRECT_URI!)
    twitterUrl.searchParams.append(
      'scope',
      'tweet.read users.read follows.read'
    )
    twitterUrl.searchParams.append('state', state)
    twitterUrl.searchParams.append('code_challenge', codeChallenge)
    twitterUrl.searchParams.append('code_challenge_method', 'S256')

    return reply.redirect(twitterUrl.toString())
  })

  app.get('/callback', async (req, reply) => {
    const { code, state } = req.query as { code: string; state: string }

    // Validação do state
    if (!req.session.oauth_state || state !== req.session.oauth_state) {
      return reply.status(400).send({ error: 'State inválido' })
    }

    const codeVerifier = req.session.codeVerifier
    if (!codeVerifier) {
      return reply.status(400).send({ error: 'Sessão inválida' })
    }

    try {
      const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
        'base64'
      )

      const params = new URLSearchParams()
      params.append('grant_type', 'authorization_code')
      params.append('code', code)
      params.append('redirect_uri', REDIRECT_URI!)
      params.append('code_verifier', codeVerifier)
      params.append('client_id', CLIENT_ID!)

      const res = await axios.post(
        'https://api.twitter.com/2/oauth2/token',
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${credentials}`, // Adicione esta linha
            Accept: 'application/json',
          },
        }
      )

      const userRes = await axios.get('https://api.twitter.com/2/users/me', {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        },
      })

      return reply.send({
        token: res.data.access_token,
        user_id: userRes.data.data.id,
      })
    } catch (err: any) {
      console.error('ERRO COMPLETO:', {
        request: err.config?.data,
        response: err.response?.data,
      })
      return reply.status(500).send({
        error: 'Falha na autenticação',
        details: err.response?.data || err.message,
      })
    }
  })
}

export default authRoutes
