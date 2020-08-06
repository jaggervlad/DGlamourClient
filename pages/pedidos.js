import React from 'react';
import Layout from '../component/customs/Layout';
import Pedido from '../component/pedidos/Pedido';
import { useQuery } from '@apollo/client';
import { OBTENER_PEDIDOS } from '../graphql/pedidos';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';

export default function Pedidos() {
  let obtenerPedidos;
  const { data, loading, error } = useQuery(OBTENER_PEDIDOS);

  if (loading) return 'Cargando...';
  if (error) return `Error || ${error.message}`;
  if (data) {
    obtenerPedidos = data?.obtenerPedidos;
  }

  const TablePedido = () => (
    <table className="table-auto shadow-md mt-10 w-full w-lg">
      <thead className="bg-gray-800">
        <tr className="text-white">
          <th className="w-1/5 py-2">No Pedido</th>
          <th className="w-1/5 py-2">Cliente</th>
          <th className="w-1/5 py-2">Direccion</th>
          <th className="w-1/5 py-2">Total</th>
          <th className="w-1/5 py-2">Estado</th>
          <th className="w-1/8 py-2">Ver</th>
          <th className="w-1/8 py-2">Editar</th>
        </tr>
      </thead>

      <tbody className="bg-white">
        {obtenerPedidos.map((pedido) => (
          <Pedido key={pedido.id} pedido={pedido} />
        ))}
      </tbody>
    </table>
  );

  return (
    <Layout>
      <Title title={`pedidos`} />

      <NewLink model={`nuevo pedido`} ruta={`nuevopedido`} />
      <NewLink model={`ver pedidos pagados`} ruta={`pedidospagados`} />
      <NewLink model={`ver pedidos pendientes`} ruta={`pedidospendientes`} />

      {obtenerPedidos.length === 0 ? (
        <p className="mt-5 text-center text-2xl">No hay pedidos aún</p>
      ) : (
        <TablePedido />
      )}
    </Layout>
  );
}
