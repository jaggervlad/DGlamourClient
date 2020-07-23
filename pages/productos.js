import { useEffect } from 'react';
import { getStandAloneApollo } from '../apollo';
import Layout from '../component/Layout';
import Producto from '../component/Producto';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { OBTENER_PRODUCTOS } from '../graphql/productos';

export default function Productos({ productosApi }) {
  const { data, loading, error, startPolling, stopPolling } = useQuery(
    OBTENER_PRODUCTOS
  );
  const productos = data?.obtenerProductos;

  if (loading || !data) return 'Cargando..';
  if (error) return `Error || ${error.message}`;

  return (
    <>
      <Layout>
        <h1 className="text-2xl text-gray-800 font-light">Productos</h1>

        <Link href="/nuevoproducto">
          <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white hover:bg-gray-800 hover:text-gray-200 mb-3 rounded uppercase font-bold text-sm">
            Nuevo Producto
          </a>
        </Link>

        <table className="table-auto shadow-md mt-10 w-full w-lg">
          <thead className="bg-gray-800">
            <tr className="text-white">
              <th className="w-1/5 py-2">Nombre</th>
              <th className="w-1/6 py-2">Existencia</th>
              <th className="w-1/6 py-2">PPS</th>
              <th className="w-1/6 py-2">PPM</th>
              <th className="w-1/5 py-2">Categoria</th>
              <th className="w-1/5 py-2">Marca</th>
              <th className="w-1/8 py-2">Eliminar</th>
              <th className="w-1/8 py-2">Editar</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {productos.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))}
          </tbody>
        </table>
      </Layout>
    </>
  );
}

export async function getStaticProps(ctx) {
  const client = getStandAloneApollo();
  await client.query({ query: OBTENER_PRODUCTOS });

  return {
    props: { productosApi: client.cache.extract() },
  };
}
