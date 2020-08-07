import React from 'react';
import Layout from '../component/customs/Layout';
import PedidoPendiente from '../component/pedidos/PedidoPendiente';
import { useQuery } from '@apollo/client';
import { PEDIDOS_PENDIENTES } from '../graphql/pedidos';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';
import { Ring } from 'react-awesome-spinners';
import NotLogded from '../component/customs/NotLogged';

export default function Pedidos() {
  let pedidosPendientes;
  const { data, loading, error } = useQuery(PEDIDOS_PENDIENTES);

  if (loading) return <Ring />;
  if (error) return <NotLogded />;
  if (data) {
    pedidosPendientes = data?.pedidosPendientes;
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
        </tr>
      </thead>

      <tbody className="bg-white">
        {pedidosPendientes.map((pedido) => (
          <PedidoPendiente key={pedido.id} pedido={pedido} />
        ))}
      </tbody>
    </table>
  );

  return (
    <Layout>
      <Title title={`pedidos pendientes`} />

      <NewLink model={`pedidos`} ruta={`pedidos`} />

      {pedidosPendientes.length === 0 ? (
        <p className="mt-5 text-center text-2xl">No hay pedidos aún</p>
      ) : (
        <TablePedido />
      )}
    </Layout>
  );
}
