import type { Config } from 'drizzle-kit'
import { env } from './src/env.ts'

export default {
  schema: './src/db/postgresSQL/schema.ts',
  out: './src/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL_POSTGRES,
  },
} satisfies Config
