import React, { useState, useEffect, useRef, useCallback } from 'react';
import Layout from '../component/customs/Layout';
import Pedido from '../component/pedidos/Pedido';
import { useQuery } from '@apollo/client';
import { OBTENER_PEDIDOS } from '../graphql/pedidos';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';
import { Ring } from 'react-awesome-spinners';
import NotLogged from '../component/customs/NotLogged';

export default function Pedidos() {
  const [search, setSearch] = useState('');
  const [pedidosFiltrados, setPedidosFiltradosh] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, error, fetchMore } = useQuery(OBTENER_PEDIDOS, {
    variables: { offset: pageNumber },
    fetchPolicy: 'cache-and-network',
  });
  const obtenerPedidos = data?.obtenerPedidos;

  useEffect(() => {
    if (obtenerPedidos) {
      setPedidosFiltradosh(
        obtenerPedidos.filter(
          (pedido) =>
            pedido.id.toLowerCase().includes(search.toLowerCase()) ||
            pedido.cliente.nombre.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, obtenerPedidos]);

  if (loading) return <Ring />;
  if (error) return <NotLogged />;

  const TablePedido = () => (
    <div className="relative">
      <div className="h-screen overflow-y-scroll">
        <table className="table-auto shadow-md mt-10 w-full">
          <thead className="bg-gray-800 ">
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
            {pedidosFiltrados.map((pedido) => {
              return <Pedido key={pedido.id} pedido={pedido} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <Layout>
      <Title title={`pedidos`} />
      <div className="grid grid-cols-4 w-2/3">
        <NewLink model={`nuevo `} ruta={`nuevopedido`} />
        <NewLink model={`pagados`} ruta={`pedidospagados`} />
        <NewLink model={`enviados`} ruta={`pedidosdespachados`} />

        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 font-bold mr-3 py-1 px-2 leading-tight focus:outline-none border-solid rounded"
          type="text"
          placeholder="Buscar"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {pedidosFiltrados.length === 0 || loading ? (
        <p className="mt-5 text-center text-2xl">Cargando...</p>
      ) : (
        <div>
          <TablePedido />

          <div className="flex justify-center m-3">
            <button
              onClick={(e) => {
                e.preventDefault();
                setPageNumber((prevPageNumber) => prevPageNumber + 1);
                fetchMore({
                  variables: { offset: pageNumber },
                });
              }}
              className="bg-blue-800 hover:bg-gray-800 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
