import { useState, useEffect } from 'react';
import Layout from '../component/customs/Layout';
import Producto from '../component/productos/Producto';
import { useQuery } from '@apollo/client';
import { OBTENER_PRODUCTOS } from '../graphql/productos';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';
import { Ring } from 'react-awesome-spinners';
import NotLogded from '../component/customs/NotLogged';

export default function Productos() {
  const { data, loading, error } = useQuery(OBTENER_PRODUCTOS);
  const getProducts = data?.obtenerProductos;
  const [filterProducts, setFilterProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (getProducts) {
      setFilterProducts(
        getProducts.filter((product) =>
          product.nombre.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, getProducts]);
  if (loading) return <Ring />;
  if (error) return <NotLogded />;

  const TableProducts = () => {
    return (
      <div class="relative">
        <div className="h-screen overflow-y-scroll">
          <table className="table-auto shadow-md mt-10 w-full w-lg">
            <thead className="bg-gray-800">
              <tr className="text-white">
                <th className="w-1/5 py-2">Nombre</th>
                <th className="w-1/6 py-2">Existencia</th>
                <th className="w-1/6 py-2">Precio</th>
                <th className="w-1/5 py-2">Categoria</th>
                <th className="w-1/5 py-2">Marca</th>
                <th className="w-1/8 py-2">Eliminar</th>
                <th className="w-1/8 py-2">Editar</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {filterProducts.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  return (
    <>
      <Layout>
        <Title title={`productos`} />

        <div class="grid grid-cols-2 w-1/3">
          <NewLink model={`nuevo`} ruta={`nuevoproducto`} />

          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 font-bold mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Buscar.."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <TableProducts />
      </Layout>
    </>
  );
}
