import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import PedidoContext from '../../context/pedidos/PedidoContex';
// Components
import Swal from 'sweetalert2';
import AsignarCliente from '../../component/pedidos/AsignarCliente';
import AsignarProductos from '../../component/pedidos/AsignarProductos';
import ResumenPedido from '../../component/pedidos/ResumenPedido';
import Layout from '../../component/customs/Layout';
import Total from '../../component/pedidos/Total';
import { TitleNew } from '../../component/customs/TitleNew';
// Graphql
import { useMutation, useQuery } from '@apollo/client';
import { ACTUALIZAR_PEDIDO, OBTENER_PEDIDO } from '../../graphql/pedidos';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import NotLogded from '../../component/customs/NotLogged';
import { Ring } from 'react-awesome-spinners';

export default function NuevoPedido() {
  const { register, errors, handleSubmit } = useForm();
  const router = useRouter();
  const { pedId } = router.query;
  const pedidoContext = useContext(PedidoContext);
  const { cliente, productos, total } = pedidoContext;
  const { data, error, loading } = useQuery(OBTENER_PEDIDO, {
    variables: { id: pedId },
  });
  const [actualizarPedido] = useMutation(ACTUALIZAR_PEDIDO);
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
        total,
        direccion,
        costEnv: Number(costEnv),
      };
      await actualizarPedido({ variables: { id: pedId, input } });
      e.target.reset();
      router.push('/pedidos');
      Swal.fire('Correcto', 'El pedido se edito correctamente', 'success');
    } catch (error) {
      const errorMessage = error.message.replace('Graphql error: ', '');
      Swal.fire('Error', errorMessage, 'error');
    }
  };

  if (error) return <NotLogded />;
  if (loading) return <Ring />;
  const { obtenerPedido } = data;

  return (
    <Layout>
      <TitleNew title={`editar pedido`} />

      <div className="flex justify-center mt-5">
        <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <label className="block mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">
            Cliente
          </label>

          <p className="capitalize text-2xl font-bold ">
            {obtenerPedido.cliente.nombre}
          </p>

          <AsignarProductos />
          <ResumenPedido />
          <Total />

          <label className="block mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">
            4.- Costo de Envio
          </label>

          <input
            defaultValue={obtenerPedido.costEnv}
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
            defaultValue={obtenerPedido.direccion}
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
            Editar Pedido
          </button>
        </form>
      </div>
    </Layout>
  );
}
