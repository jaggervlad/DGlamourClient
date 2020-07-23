import React from 'react';
import Link from 'next/link';
import Layout from '../component/Layout';
import Pedido from '../component/pedidos/Pedido';
import { useQuery } from '@apollo/client';
import { OBTENER_PEDIDOS } from '../graphql/pedidos';

export default function Pedidos() {
  const { data, loading, error } = useQuery(OBTENER_PEDIDOS);
  const obtenerPedidos = data?.obtenerPedidos;

  if (loading) return 'Cargando...';
  if (error) return `Error || ${error.message}`;

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Pedidos</h1>

      <Link href="/nuevopedido">
        <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold">
          Nuevo Pedido
        </a>
      </Link>

      {obtenerPedidos.length === 0 ? (
        <p className="mt-5 text-center text-2xl">No hay pedidos aún</p>
      ) : (
        obtenerPedidos.map((pedido) => (
          <Pedido key={pedido.id} pedido={pedido} />
        ))
      )}
    </Layout>
  );
}
