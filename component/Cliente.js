import Swal from 'sweetalert2';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { ELIMINAR_CLIENTE, OBTENER_CLIENTES } from '../graphql/clientes';

export default function Cliente({ cliente }) {
  const { id, cedula, nombre, mail, telefono } = cliente;
  const [eliminarCliente] = useMutation(ELIMINAR_CLIENTE, {
    update(cache) {
      const { obtenerClientes } = cache.readQuery({
        query: OBTENER_CLIENTES,
      });

      cache.writeQuery({
        query: OBTENER_CLIENTES,
        data: {
          obtenerClientes: obtenerClientes.filter(
            (clienteActual) => clienteActual.id !== id
          ),
        },
      });
    },
  });
  const confirmarEliminarCliente = () => {
    Swal.fire({
      title: '¿Deseas eliminar a este cliente?',
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
          const { data } = await eliminarCliente({ variables: { id } });

          Swal.fire('Eliminado', data.eliminarCliente, 'success');
        } catch (error) {
          const errorMessage = error.message.replace('Graphql error: ', '');
          Swal.fire('Error', errorMessage, 'error');
        }
      }
    });
  };

  return (
    <tr className="text-center">
      <td className="border px-4 py-2">{nombre}</td>
      <td className="border px-4 py-2">{cedula}</td>
      <td className="border px-4 py-2">{telefono}</td>
      <td className="border px-4 py-2">{mail}</td>
      <td className="border px-4 py-2">
        <button
          type="button"
          className="flex justify-center items-center bg-red-800 py-2 px-2 w-full mx-auto text-white rounded"
          onClick={() => confirmarEliminarCliente()}
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
        <Link href="/editarcliente/[id]" as={`/editarcliente/${id}`}>
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
}
