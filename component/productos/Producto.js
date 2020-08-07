import Swal from 'sweetalert2';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { ELIMINAR_PRODUCTO, OBTENER_PRODUCTOS } from '../../graphql/productos';

const Producto = ({ producto }) => {
  const { id, nombre, precio, existencia, categoria, marca } = producto;
  const [eliminarProducto] = useMutation(ELIMINAR_PRODUCTO, {
    update(cache) {
      const { obtenerProductos } = cache.readQuery({
        query: OBTENER_PRODUCTOS,
      });

      cache.writeQuery({
        query: OBTENER_PRODUCTOS,
        data: {
          obtenerProductos: obtenerProductos.filter(
            (productoActual) => productoActual.id !== id
          ),
        },
      });
    },
  });

  const confirmarEliminarProducto = () => {
    Swal.fire({
      title: '¿Deseas eliminar a este producto?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, Cancelar',
    }).then(async (result) => {
      if (result.value) {
        try {
          await eliminarProducto({ variables: { id } });
          Swal.fire('Correct', 'Se elimino el producto', 'success');
        } catch (error) {
          const errorMessage = error.message.replace('Graphql error: ', '');
          Swal.fire('Error', errorMessage, 'error');
        }
      }
    });
  };

  return (
    <tr className="text-center">
      <td className="border px-4 py-2">{nombre} </td>
      <td className="border px-4 py-2">{existencia} Piezas</td>
      <td className="border px-4 py-2">$ {precio} </td>
      <td className="border px-4 py-2"> {categoria.nombre} </td>
      <td className="border px-4 py-2"> {marca} </td>
      <td className="border px-4 py-2">
        <button
          type="button"
          className="flex justify-center items-center bg-red-800 py-2 px-2 w-full text-white rounded"
          onClick={() => confirmarEliminarProducto()}
        >
          <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      </td>
      <td className="border px-4 py-2">
        <Link href="/editarproducto/[id]" as={`/editarproducto/${id}`}>
          <button
            type="button"
            className="flex justify-center items-center bg-green-600 py-2 px-2 w-full text-white rounded"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-4 h-4 ml-2"
            >
              <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Producto;
