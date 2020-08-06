import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { ELIMINAR_PEDIDO, OBTENER_PEDIDOS } from '../../graphql/pedidos';

export function EliminarPedido({ id }) {
  const router = useRouter();
  const [eliminarPedido] = useMutation(ELIMINAR_PEDIDO, {
    update(cache) {
      const { obtenerPedidos } = cache.readQuery({ query: OBTENER_PEDIDOS });

      cache.writeQuery({
        query: OBTENER_PEDIDOS,
        data: {
          obtenerPedidos: obtenerPedidos.filter((pedido) => pedido.id !== id),
        },
      });
    },
  });
  const confirmarEliminarPedido = () => {
    Swal.fire({
      title: '¿Deseas eliminar a este pedido?',
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
          const data = await eliminarPedido({
            variables: {
              id,
            },
          });

          router.push('/pedidos');
          Swal.fire('Eliminado', data.eliminarPedido, 'success');
        } catch (error) {
          const errorMessage = error.message.replace('Graphql error: ', '');
          Swal.fire('Error', errorMessage, 'error');
        }
      }
    });
  };
  return (
    <div className=" px-3 md:mb-0">
      <button
        className="uppercase text-xs font-bold mt-4 bg-red-800 px-5 py-2 inline-block text-white rounded leading-tight"
        onClick={() => confirmarEliminarPedido()}
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
    </div>
  );
}
