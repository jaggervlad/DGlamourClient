import Swal from 'sweetalert2';
import { useMutation } from '@apollo/client';
import { ELIMINAR_PEDIDO, OBTENER_PEDIDOS } from '../../graphql/pedidos';

export function EliminarPedido({ id }) {
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
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-4 h-4 ml-2"
        >
          <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </button>
    </div>
  );
}
