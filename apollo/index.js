import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import withApollo from 'next-with-apollo';

const httpLink = createHttpLink({
  uri: 'https://blooming-citadel-99802.herokuapp.com/graphql',
  fetch,
  credentials: 'include',
});

export function getStandAloneApollo(initialState = {}) {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default withApollo(({ initialState }) =>
  getStandAloneApollo(initialState)
);
