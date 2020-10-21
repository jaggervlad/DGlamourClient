import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import {
  concatPagination,
  offsetLimitPagination,
  relayStylePagination,
} from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import fetch from 'node-fetch';
import withApollo from 'next-with-apollo';

const httpLink = createHttpLink({
  uri: 'https://blooming-citadel-99802.herokuapp.com/graphql',
  fetch,
  credentials: 'include',
  connectToDevTools: true,
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
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          obtenerPedidos: {
            keyArgs: ['offset'],
          },
        },
      },
    }).restore(initialState || {}),
  });
}

export default withApollo(({ initialState }) =>
  getStandAloneApollo(initialState)
);
