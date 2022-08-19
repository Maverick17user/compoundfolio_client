import { createServer } from '@graphql-yoga/node'
import { typeDefs } from './schemas'
import { resolvers } from './resolvers'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from 'firebaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: '/api/graphql',
})

server.start()

export { db };
export default server