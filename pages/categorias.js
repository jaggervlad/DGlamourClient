import { OBTENER_CATEGORIAS } from '../graphql/categorias';
import { useQuery } from '@apollo/client';
import Layout from '../component/customs/Layout';
import Categoria from '../component/Categoria';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';

export default function Categorias() {
  const { data, loading, error } = useQuery(OBTENER_CATEGORIAS);
  const categorias = data?.obtenerCategorias;
  if (loading || !data) return 'Cargando..';
  if (error) return `Error || ${error.message}`;

  return (
    <Layout>
      <Title title={`categorias`} />
      <NewLink model={`categoria`} ruta={`nuevacategoria`} />

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
