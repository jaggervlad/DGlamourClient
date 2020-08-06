import App from 'next/app';
import { ApolloProvider } from '@apollo/client';
import PedidoState from '../context/pedidos/PedidoState';
import { getAccessToken } from '../utils/accessToken';
import withData from '../apollo';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <PedidoState>
          <Component {...pageProps} />
        </PedidoState>
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
