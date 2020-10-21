import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import PedidoContext from '../context/pedidos/PedidoContex';
// Components
import Swal from 'sweetalert2';
import AsignarCliente from '../component/pedidos/AsignarCliente';
import AsignarProductos from '../component/pedidos/AsignarProductos';
import ResumenPedido from '../component/pedidos/ResumenPedido';
import Layout from '../component/customs/Layout';
import Total from '../component/pedidos/Total';
import { TitleNew } from '../component/customs/TitleNew';
// Graphql
import { useMutation } from '@apollo/client';
import { useMessage } from '../hooks/useMessage';
import { NUEVO_PEDIDO, OBTENER_PEDIDOS } from '../graphql/pedidos';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export default function NuevoPedido() {
  const { register, errors, handleSubmit } = useForm();
  const router = useRouter();
  const [mensaje, guardarMensaje, mostrarMensaje] = useMessage();
  const pedidoContext = useContext(PedidoContext);
  const { cliente, productos, total } = pedidoContext;
  const [nuevoPedido] = useMutation(NUEVO_PEDIDO, {
    // update(cache, { data: nuevoPedido }) {
    //   const { obtenerPedidos } = cache.readQuery({ query: OBTENER_PEDIDOS });
    //   cache.writeQuery({
    //     query: OBTENER_PEDIDOS,
    //     data: {
    //       obtenerPedidos: [...obtenerPedidos, nuevoPedido],
    //     },
    //   });
    // },
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
  const validarPedido = () => {
    return !productos?.every((producto) => producto.cantidad > 0) ||
      total === 0 ||
      cliente.length === 0
      ? ' opacity-50 cursor-not-allowed '
      : '';
  };

  const onSubmit = async (data, e) => {
    try {
      const { direccion, costEnv } = data;
      const input = {
        pedido,
        cliente: id,
        total,
        direccion,
        costEnv: Number(costEnv),
      };
      await nuevoPedido({
        variables: { input },
        refetchQueries: [{ query: OBTENER_PEDIDOS }],
      });
      e.target.reset();
      router.push('/pedidos');
      Swal.fire('Correcto', 'El pedido se registró correctamente', 'success');
    } catch (error) {
      guardarMensaje(error.message.replace('GraphQL error: ', ''));

      setTimeout(() => {
        guardarMensaje(null);
      }, 3000);
    }
  };
  return (
    <Layout>
      <TitleNew title={`nuevo pedido`} />

      {mensaje && mostrarMensaje()}

      <div className="flex justify-center mt-5">
        <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <AsignarCliente />
          <AsignarProductos />
          <ResumenPedido />
          <Total />

          <label className="block mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">
            4.- Costo de Envio
          </label>

          <input
            name="costEnv"
            ref={register()}
            placeholder="Costo Envio"
            className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:ml-4"
          />

          <label
            className="block mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold mb-2"
            htmlFor="direccion"
          >
            5.- Direccion de Envio
          </label>
          <input
            className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            name="direccion"
            placeholder="Dirección de envio"
            ref={register({ required: true })}
          />

          <ErrorMessage errors={errors} name="direccion" />

          <button
            type="submit"
            className={` bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 ${validarPedido()} `}
          >
            Registrar Pedido
          </button>
        </form>
      </div>
    </Layout>
  );
}
