import { useMutation, gql } from '@apollo/client';
import { OBTENER_USUARIOS } from '../../graphql/usuarios';
import Swal from 'sweetalert2';

export const ELIMINAR_USUARIO = gql`
  mutation eliminarUsuario($id: ID!) {
    eliminarUsuario(id: $id)
  }
`;
export function EliminarUsuario({ id }) {
  const [eliminarUsuario] = useMutation(ELIMINAR_USUARIO, {
    update(cache) {
      const { obtenerUsuarios } = cache.readQuery({ query: OBTENER_USUARIOS });

      cache.writeQuery({
        query: OBTENER_USUARIOS,
        data: {
          obtenerUsuarios: obtenerUsuarios.filter(
            (usuario) => usuario.id !== id
          ),
        },
      });
    },
  });
  const deleteUser = () => {
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
          const data = await eliminarUsuario({
            variables: {
              id,
            },
          });

          Swal.fire('Eliminado', data.eliminarUsuario, 'success');
        } catch (error) {
          const errorMessage = error.message.replace('Graphql error: ', '');
          Swal.fire('Error', errorMessage, 'error');
        }
      }
    });
  };
  return (
    <button
      type="button"
      className="flex justify-center items-center  bg-red-800 py-2 px-2 w-full text-white rounded"
      onClick={() => deleteUser()}
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
  );
}
