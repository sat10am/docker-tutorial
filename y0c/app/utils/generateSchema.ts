import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import path from 'path'

export function generateSchema() {
  return buildSchema({
    resolvers: [path.join(__dirname, '../modules/**/*.resolvers.ts')],
    container: Container,
  })
}
