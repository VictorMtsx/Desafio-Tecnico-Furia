import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { env } from '../../env.ts'
import { furiaUsers } from './schema.ts'

export const pg = postgres(env.DATABASE_URL_POSTGRES)
export const db = drizzle(pg, {
  schema: {
    furiaUsers,
  },
})
