import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import fetch from 'node-fetch';
import withApollo from 'next-with-apollo';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
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
          fields: {
            obtenerPedidos: concatPagination(),
            pedidosPagados: concatPagination(),
          },
        },
      },
    }).restore(initialState || {}),
  });
}

export default withApollo(({ initialState }) =>
  getStandAloneApollo(initialState)
);
