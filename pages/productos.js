import Layout from '../component/customs/Layout';
import Producto from '../component/Producto';
import { useQuery } from '@apollo/client';
import { OBTENER_PRODUCTOS } from '../graphql/productos';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';

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
        <Title title={`productos`} />

        <NewLink model={`producto`} ruta={`nuevoproducto`} />

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
      </Layout>
    </>
  );
}
