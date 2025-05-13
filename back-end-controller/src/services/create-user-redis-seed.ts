import { redis } from '../db/redis/client.ts'

export default async function CreateUserRedisSeed() {
  const user1 = await redis.hset('users', 'id_user', '123')
  const user1SetPost = await redis.hset('id_user:123', 'posts', 'hello world')

  const getDataUser123 = await redis.hget('id_user:123', 'posts')
  console.log(getDataUser123)
}
