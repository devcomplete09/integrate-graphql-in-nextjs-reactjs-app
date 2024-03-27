
import { ApolloClient, InMemoryCache } from '@apollo/client';

// https://studio.apollographql.com/public/countries/variant/current/explorer
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});

export default client;