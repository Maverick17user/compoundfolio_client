import { createServer } from '@graphql-yoga/node'
import { typeDefs } from './auth/schemas'
import { resolvers } from './auth/resolvers'
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: "compoundfolio",
  storageBucket: process.env.FB_STORAGE,
  messagingSenderId: process.env.FB_MSG_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
  databaseURL: process.env.FB_REALTIME_DB_URL
};

// Initialize Firebase
export const firebaseClient = initializeApp(firebaseConfig);
export const db = getDatabase(firebaseClient)

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: '/api/graphql',
})

server.start()

export default server