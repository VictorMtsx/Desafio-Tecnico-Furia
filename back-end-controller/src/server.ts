import Fastify from 'fastify'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.ts'
import fastifyCookie from '@fastify/cookie'
import fastifySession from '@fastify/session'
import axios from 'axios'

dotenv.config()
const fastify = Fastify({
  logger: true,
})
fastify.register(fastifyCookie, {
  secret: 'seu-segredo-super-forte-min-32-chars', // Chave para assinar cookies
})

// Depois configure a sessão
fastify.register(fastifySession, {
  secret: 'outro-segredo-super-forte-min-32-chars',
  cookie: {
    secure: false, // true em produção (HTTPS)
  },
})
fastify.register(authRoutes)

fastify.get('/', (request, reply) => {
  reply.send('Hello, world!')
})

fastify.get('/followers', async (req, reply) => {
  const query = req.query as { access_token: string; user_id: string }

  try {
    const { access_token, user_id } = query

    const response = await axios.get(
      `https://api.twitter.com/2/users/${user_id}/followers`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        params: {
          max_results: 100,
        },
      }
    )

    return reply.send(response.data)
  } catch (err: any) {
    console.error('Erro real do Twitter:', err.response?.data || err.message)
    return reply.status(500).send({ error: 'Falha ao buscar seguidores' })
  }
})

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`server listening on ${address}`)
})
