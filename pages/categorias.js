import Link from 'next/link';
import { OBTENER_CATEGORIAS } from '../graphql/categorias';
import { useQuery } from '@apollo/client';
import Layout from '../component/Layout';
import Categoria from '../component/Categoria';

export default function Categorias() {
  const { data, loading, error } = useQuery(OBTENER_CATEGORIAS);
  const categorias = data?.obtenerCategorias;
  if (loading || !data) return 'Cargando..';
  if (error) return `Error || ${error.message}`;

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Categorias</h1>
      <Link href="/nuevacategoria">
        <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold">
          Nueva Categoria
        </a>
      </Link>
      <table className="table-auto shadow-md mt-10 w-full w-lg">
        <thead className="bg-gray-800">
          <tr className="text-white">
            <th className="w-1/7 py-2 px-4 text-left ">Nombre</th>
            <th className="w-1/12 py-2">Eliminar</th>
            <th className="w-1/12 py-2">Editar</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {categorias.map((categoria) => (
            <Categoria key={categoria.id} categoria={categoria} />
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
