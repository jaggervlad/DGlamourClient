import React from 'react';
import Layout from '../component/customs/Layout';
import Pedido from '../component/pedidos/Pedido';
import { useQuery } from '@apollo/client';
import { OBTENER_PEDIDOS } from '../graphql/pedidos';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';
import { Pagination } from '../component/customs/Pagination';
import { usePagination } from '../hooks/usePagination';

export default function Pedidos() {
  let obtenerPedidos, totalPedidos;
  const { current, limit, offset, pageAfter, pageBefore } = usePagination();
  const { data, loading, error } = useQuery(OBTENER_PEDIDOS, {
    variables: { limit, offset },
  });

  if (loading) return 'Cargando...';
  if (error) return `Error || ${error.message}`;
  if (data) {
    obtenerPedidos = data?.obtenerPedidos;
    totalPedidos = data?.totalPedidos;
  }

  return (
    <Layout>
      <Title title={`pedidos`} />

      <NewLink model={`nuevo pedido`} ruta={`nuevopedido`} />
      <NewLink model={`ver pedidos pagados`} ruta={`pedidospagados`} />
      <NewLink model={`ver pedidos pendientes`} ruta={`pedidospendientes`} />

      {obtenerPedidos.length === 0 ? (
        <p className="mt-5 text-center text-2xl">No hay pedidos aún</p>
      ) : (
        obtenerPedidos.map((pedido) => (
          <Pedido key={pedido.id} pedido={pedido} />
        ))
      )}

      <Pagination
        total={totalPedidos}
        current={current}
        limit={limit}
        pageAfter={pageAfter}
        pageBefore={pageBefore}
      />
    </Layout>
  );
}
