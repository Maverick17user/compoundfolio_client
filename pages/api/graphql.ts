import { createServer } from '@graphql-yoga/node'
import { typeDefs } from './auth/schemas'
import { resolvers } from './auth/resolvers'

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: '/api/graphql',
})

export default server