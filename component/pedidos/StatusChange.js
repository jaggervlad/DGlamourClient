import { useMutation } from '@apollo/client';
import { ACTUALIZAR_PEDIDO } from '../../graphql/pedidos';

export function StatusChange({
  status,
  setEstado,
  guardarMensaje,
  cliente,
  pedidoMap,
  id,
}) {
  const [actualizarPedido] = useMutation(ACTUALIZAR_PEDIDO);
  const cambiarEstadoPedido = async (nuevoEstado) => {
    try {
      const { data } = await actualizarPedido({
        variables: {
          id,
          input: {
            estado: nuevoEstado,
            cliente: cliente.id,
            pedido: pedidoMap,
          },
        },
      });
      setEstado(data.actualizarPedido.estado);
    } catch (error) {
      guardarMensaje(error.message.replace('Graphql error:', ''));

      setTimeout(() => {
        guardarMensaje(null);
      }, 3000);
    }
  };
  return (
    <>
      <h2 className="text-gray-800 font-bold mt-10">Estado Pedido:</h2>

      <select
        className="mt-2 appearance-none bg-blue-600 border border-blue-600 text-white p-2 text-center rounded leading-tight focus:outline-none focus:bg-blue-600 focus:border-blue-500 uppercase text-xs font-bold "
        value={status}
        onChange={(e) => cambiarEstadoPedido(e.target.value)}
      >
        <option value="PENDIENTE">PENDIENTE</option>
        <option value="PAGADO">PAGADO</option>
        <option value="DESPACHADO">DESPACHADO</option>
      </select>
    </>
  );
}
