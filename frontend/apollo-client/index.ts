import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',  // Adjust the port accordingly to your NestJS backend
  cache: new InMemoryCache()
});

export default client;
