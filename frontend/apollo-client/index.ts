import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:31000/graphql',  // Adjust the port accordingly to your NestJS backend
  cache: new InMemoryCache()
});

export default client;
