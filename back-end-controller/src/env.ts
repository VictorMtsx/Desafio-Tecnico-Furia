import z from 'zod'

export const envSchema = z.object({
  DATABASE_URL_POSTGRES: z.string().url(),
  REDIS_URL: z.string().url(),
  CLIENT_ID: z.string(),
  CLIENT_SECRET: z.string(),
  REDIRECT_URI: z.string(),
  BEARER_TOKEN: z.string(), 
})

export const env = envSchema.parse(process.env)
