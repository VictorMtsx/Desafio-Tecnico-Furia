import { pgTable, uuid, text, integer, timestamp } from 'drizzle-orm/pg-core'

export const furiaUsers = pgTable('furia_fas', {
  id: uuid('id').defaultRandom().primaryKey(),
  image: text('image').notNull(),
  name: text('name').notNull(),
  nickname: text('nickname').notNull(),
  age: integer().notNull().default(0),
  twitter: text('twitter').notNull(),
  cityAndState: text('city_and_state').notNull(),
  game: text('game').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})
