import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloCustomClient = new ApolloClient({
  uri: `{${process.env.API_HOST}/graphql`,
  cache: new InMemoryCache()
});

export default apolloCustomClient;