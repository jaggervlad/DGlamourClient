import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import PedidoContext from '../context/pedidos/PedidoContex';
// Components
import Swal from 'sweetalert2';
import AsignarCliente from '../component/pedidos/AsignarCliente';
import AsignarProductos from '../component/pedidos/AsignarProductos';
import ResumenPedido from '../component/pedidos/ResumenPedido';
import Layout from '../component/Layout';
import Total from '../component/pedidos/Total';
// Graphql
import { useMutation } from '@apollo/client';
import { useMessage } from '../hooks/useMessage';
import { NUEVO_PEDIDO, OBTENER_PEDIDOS } from '../graphql/pedidos';

export default function NuevoPedido() {
  const router = useRouter();
  const [mensaje, guardarMensaje, mostrarMensaje] = useMessage();
  const pedidoContext = useContext(PedidoContext);
  const { cliente, productos, total } = pedidoContext;
  const [nuevoPedido] = useMutation(NUEVO_PEDIDO, {
    update(cache, { data: nuevoPedido }) {
      const { obtenerPedidos } = cache.readQuery({
        query: OBTENER_PEDIDOS,
      });

      cache.writeQuery({
        query: OBTENER_PEDIDOS,
        data: {
          obtenerPedidos: [...obtenerPedidos, nuevoPedido],
        },
      });
    },
  });
  const { id } = cliente;
  const pedido = productos.map(
    ({
      __typename,
      existencia,
      categoria,
      undMed,
      presentacion,
      codigo,
      marca,
      ...productos
    }) => productos
  );

  console.log(pedido);

  const newOrder = async () => {
    try {
      const input = { pedido, cliente: id, total };
      await nuevoPedido({ variables: { input } });

      router.push('/pedidos');
      Swal.fire('Correcto', 'El pedido se registró correctamente', 'success');
    } catch (error) {
      guardarMensaje(error.message.replace('GraphQL error: ', ''));

      setTimeout(() => {
        guardarMensaje(null);
      }, 3000);
    }
  };

  const validarPedido = () => {
    return !productos?.every((producto) => producto.cantidad > 0) ||
      total === 0 ||
      cliente.length === 0
      ? ' opacity-50 cursor-not-allowed '
      : '';
  };
  return (
    <Layout>
      <h1 className="text-center text-2xl text-gray-800 font-light">
        Crear Nuevo Pedido
      </h1>

      {mensaje && mostrarMensaje()}

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <AsignarCliente />
          <AsignarProductos />
          <ResumenPedido />
          <Total />

          <button
            type="button"
            className={` bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 ${validarPedido()} `}
            onClick={() => newOrder()}
          >
            Registrar Pedido
          </button>
        </div>
      </div>
    </Layout>
  );
}
