import React, { useState, useEffect } from 'react';
import Layout from '../component/customs/Layout';
import Pedido from '../component/pedidos/Pedido';
import { useQuery } from '@apollo/client';
import { OBTENER_PEDIDOS } from '../graphql/pedidos';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';
import { Ring } from 'react-awesome-spinners';
import NotLogded from '../component/customs/NotLogged';

export default function Pedidos() {
  const [search, setSearch] = useState('');
  const [pedidosFiltrados, setPedidosFiltradosh] = useState([]);
  const { data, loading, error } = useQuery(OBTENER_PEDIDOS);
  const obtenerPedidos = data?.obtenerPedidos;

  useEffect(() => {
    if (obtenerPedidos) {
      setPedidosFiltradosh(
        obtenerPedidos.filter((pedido) =>
          pedido.id.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, obtenerPedidos]);

  if (loading) return <Ring />;
  if (error) return <NotLogded />;

  const TablePedido = () => (
    <table className="table-auto shadow-md mt-10 w-full w-lg">
      <thead className="bg-gray-800">
        <tr className="text-white">
          <th className=" py-1">No Pedido</th>
          <th className=" py-1">Cliente</th>
          <th className=" py-1">Direccion</th>
          <th className=" py-1">Total</th>
          <th className=" py-1">Estado</th>
          <th className=" py-1">Ver</th>
          <th className=" py-1">Editar</th>
          <th className=" py-1">Imprimir</th>
        </tr>
      </thead>

      <tbody className="bg-white">
        {pedidosFiltrados.map((pedido) => (
          <Pedido key={pedido.id} pedido={pedido} />
        ))}
      </tbody>
    </table>
  );

  return (
    <Layout>
      <Title title={`pedidos`} />
      <div className="grid grid-cols-4 w-2/3">
        <NewLink model={`nuevo `} ruta={`nuevopedido`} />
        <NewLink model={`ver pagados`} ruta={`pedidospagados`} />
        <NewLink model={`ver pendientes`} ruta={`pedidospendientes`} />

        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 font-bold mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Buscar.."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {pedidosFiltrados.length === 0 ? (
        <p className="mt-5 text-center text-2xl">No hay pedidos aún</p>
      ) : (
        <TablePedido />
      )}
    </Layout>
  );
}
