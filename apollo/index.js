import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import fetch from 'node-fetch';
import withApollo from 'next-with-apollo';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  fetch,
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export function getStandAloneApollo(initialState = {}) {
  return new ApolloClient({
    connectToDevTools: true,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default withApollo(({ initialState }) =>
  getStandAloneApollo(initialState)
);
