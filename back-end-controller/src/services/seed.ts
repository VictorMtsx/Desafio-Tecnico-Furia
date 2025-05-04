import { db, pg } from '../db/postgresSQL/client.ts'
import { furiaUsers } from '../db/postgresSQL/schema.ts'
import { redis } from '../db/redis/client.ts'

async function seed() {
  await db.delete(furiaUsers).execute()
  await db
    .insert(furiaUsers)
    .values([
      {
        id: '8f0f6f8b-2e48-486c-bad2-45666ef2d5cc',
        name: 'Cristian',
        nickname: 'Cristian',
        age: 27,
        twitter: '@thevtz',
        cityAndState: 'Curitiba/PR',
        game: 'CS:GO',
        image: 'public/cristian.jpg',
        createdAt: new Date(),
      },
    ])
    .execute()

  await redis.hset(
    `users:8f0f6f8b-2e48-486c-bad2-45666ef2d5cc:posts:1, 'Esse split do CBLOL tá muito bom.'`
  )
}

seed().finally(() => {
  pg.end()
})
