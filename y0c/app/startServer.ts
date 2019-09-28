import Koa from 'koa'
import 'reflect-metadata'
import { createConnection, useContainer } from 'typeorm'
import { Container } from 'typedi'
import { ApolloServer } from 'apollo-server-koa'
import { generateSchema } from './utils/generateSchema'
import databaseOptions from './ormconfig'

export const startServer = async () => {
  try {
    const schema = await generateSchema()

    const server = new ApolloServer({
      schema,
    })

    const app = new Koa()
    server.applyMiddleware({ app })

    useContainer(Container) // eslint::dsiable

    await createConnection(databaseOptions)
    app.listen({ port: 3400 }, () => {
      console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
      )
    })
  } catch (err) {
    console.error(err)
    console.log('Server Starting Error!!')
  }
}
