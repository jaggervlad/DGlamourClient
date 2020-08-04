import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Layout from '../../component/customs/Layout';
import { TitleNew } from '../../component/customs/TitleNew';
import { useMutation, useQuery } from '@apollo/client';
import {
  ACTUALIZAR_PEDIDO,
  OBTENER_PEDIDOS_SINGLE,
} from '../../graphql/pedidos';
import Swal from 'sweetalert2';
import { Ring } from 'react-awesome-spinners';
import NotLogded from '../../component/customs/NotLogged';

export default function () {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQuery(OBTENER_PEDIDOS_SINGLE, {
    variables: { id },
  });
  const [actualizarPedido] = useMutation(ACTUALIZAR_PEDIDO, {
    variables: { id },
  });

  const { errors, handleSubmit, register } = useForm({
    defaultValues: {},
  });
  const onSubmit = async (data, e) => {
    try {
      const { descripcion, pago } = data;
      const input = { descripcion, pago };
      await actualizarPedido({ variables: { id, input } });
      e.target.reset();
      router.push('/pedidos');
      Swal.fire('Correcto', 'El producto se actualió correctamente', 'success');
    } catch (error) {
      const errorMessage = error.message.replace('Graphql error: ', '');
      Swal.fire('Error', errorMessage, 'error');
    }
  };

  if (loading) return <Ring />;
  if (error) return <NotLogded />;
  if (data) console.log(data);

  return (
    <Layout>
      <TitleNew title={`editar producto`} />
      <div className="flex justify-center mt-5">
        <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <label
            className="block mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold"
            htmlFor="pago"
          >
            Tipo de Pago
          </label>

          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            name="pago"
            ref={register({ required: 'Este campo es obligatorio' })}
          >
            <option value="">Selecciona pago</option>
            <option value="BANCO">BANCO</option>
            <option value="EFECTIVO">EFECTIVO</option>
            <option value="MIXTO">MIXTO</option>
          </select>

          <ErrorMessage errors={errors} name="pago" />

          <label
            className="block mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold"
            htmlFor="descripcion"
          >
            Descripcion tipo de pago
          </label>

          <input
            className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="descripcion"
            placeholder="Descripcion de Pago"
            type="text"
            ref={register({ required: 'Este campo es obligatorio' })}
          />

          <ErrorMessage errors={errors} name="descripcion" />

          <input
            type="submit"
            className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
            value="Guardar Cambios"
          />
        </form>
      </div>
    </Layout>
  );
}
