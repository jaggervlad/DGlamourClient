import React, { useEffect, useState } from 'react';
import Layout from '../component/customs/Layout';
import PedidoPendiente from '../component/pedidos/PedidoPendiente';
import { useQuery } from '@apollo/client';
import { PEDIDOS_DESPACHADOS } from '../graphql/pedidos';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';
import { Ring } from 'react-awesome-spinners';
import NotLogded from '../component/customs/NotLogged';

export default function Pedidos() {
  const [filterOrders, setFilterOrders] = useState([]);
  const [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, error, fetchMore } = useQuery(PEDIDOS_DESPACHADOS);
  const pedidosDespachados = data?.pedidosDespachados;

  useEffect(() => {
    if (pedidosDespachados) {
      setFilterOrders(
        pedidosDespachados.filter(
          (ped) =>
            ped.id.toLowerCase().includes(search.toLowerCase()) ||
            ped.cliente.nombre.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, pedidosDespachados]);

  if (loading) return <Ring />;
  if (error) return <NotLogded />;

  const TablePedido = () => (
    <div className="relative">
      <div className="h-screen overflow-y-scroll">
        <table className="table-auto shadow-md mt-10 w-full w-lg">
          <thead className="bg-gray-800">
            <tr className="text-white">
              <th className="py-2">No Pedido</th>
              <th className="py-2">Cliente</th>
              <th className="py-2">Direccion</th>
              <th className="py-2">Total</th>
              <th className="py-2">Estado</th>
              <th className="py-2">Ver</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {filterOrders.map((pedido) => (
              <PedidoPendiente key={pedido.id} pedido={pedido} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <Layout>
      <Title title={`pedidos despachados`} />

      <div className="flex">
        <NewLink model={`pedidos`} ruta={`pedidos`} />

        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 font-bold mr-3 py-1 px-2 leading-tight focus:outline-none border-solid rounded"
          type="text"
          placeholder="Buscar"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filterOrders.length === 0 || loading ? (
        <p className="mt-5 text-center text-2xl">cCargando...</p>
      ) : (
        <TablePedido />
      )}
    </Layout>
  );
}
