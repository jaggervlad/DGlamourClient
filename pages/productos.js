import Layout from '../component/customs/Layout';
import Producto from '../component/productos/Producto';
import { useQuery } from '@apollo/client';
import { OBTENER_PRODUCTOS } from '../graphql/productos';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';
import { Ring } from 'react-awesome-spinners';
import NotLogded from '../component/customs/NotLogged';

const TableProducts = () => {
  const { data, loading, error } = useQuery(OBTENER_PRODUCTOS);
  let productos;

  if (loading) return <Ring />;
  if (error) return <NotLogded />;
  if (data && data.obtenerProductos) {
    productos = data.obtenerProductos;
  }

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
            {productos.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default function Productos() {
  return (
    <>
      <Layout>
        <Title title={`productos`} />
        <NewLink model={`nuevo`} ruta={`nuevoproducto`} />

        <TableProducts />
      </Layout>
    </>
  );
}
