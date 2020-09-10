import { OBTENER_CATEGORIAS } from '../graphql/categorias';
import { useQuery } from '@apollo/client';
import Layout from '../component/customs/Layout';
import Categoria from '../component/Categoria';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';
import NotLogded from '../component/customs/NotLogged';
import { Ring } from 'react-awesome-spinners';
import { useState, useEffect } from 'react';

export default function Categorias() {
  const { data, loading, error } = useQuery(OBTENER_CATEGORIAS);
  const [filterCategories, setFilterCategories] = useState([]);
  const [search, setSearch] = useState('');
  const categorias = data?.obtenerCategorias;

  useEffect(() => {
    if (categorias) {
      setFilterCategories(
        categorias.filter((categorie) =>
          categorie.nombre.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, categorias]);

  if (loading) return <Ring />;
  if (error) return <NotLogded />;

  return (
    <Layout>
      <Title title={`categorias`} />
      <div class="grid grid-cols-2 w-1/3">
        <NewLink model={`nueva`} ruta={`nuevacategoria`} />

        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 font-bold mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Buscar.."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div class="relative">
        <div class="h-screen overflow-y-scroll">
          <table className="table-auto shadow-md mt-10 w-full w-lg">
            <thead className="bg-gray-800">
              <tr className="text-white">
                <th className="w-1/7 py-2 px-4 text-left ">Nombre</th>
                <th className="w-1/12 py-2">Eliminar</th>
                <th className="w-1/12 py-2">Editar</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {filterCategories.map((categoria) => (
                <Categoria key={categoria.id} categoria={categoria} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
