import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ACTUALIZAR_PEDIDO } from '../../graphql/pedidos';
import Swal from 'sweetalert2';

export function StatusChange({ status, setEstado, cliente, pedidoMap, id }) {
  const [actualizarPedido] = useMutation(ACTUALIZAR_PEDIDO);
  const [clase, setClase] = useState('');

  useEffect(() => {
    clasePedido();
  }, [status]);
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
      const errorMessage = error.message.replace('Graphql error: ', '');
      Swal.fire('Error', errorMessage, 'error');
    }
  };

  const clasePedido = () => {
    if (status === 'PENDIENTE') {
      setClase('bg-yellow-500');
    } else if (status === 'PAGADO') {
      setClase('bg-green-500');
    } else {
      setClase('bg-blue-800');
    }
  };
  return (
    <>
      <select
        className={`${clase} mt-2 appearance-none border border-blue-600 text-black p-2 text-center rounded leading-tight focus:outline-none focus:bg-blue-600 focus:border-blue-500 uppercase text-xs font-bold mx-auto`}
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
