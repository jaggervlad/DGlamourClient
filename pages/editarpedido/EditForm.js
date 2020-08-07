import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { ACTUALIZAR_PEDIDO } from '../../graphql/pedidos';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Swal from 'sweetalert2';

export function EditForm({ pedido, id }) {
  const router = useRouter();
  const [actualizarPedido] = useMutation(ACTUALIZAR_PEDIDO, {
    variables: { id },
  });
  const { descripcion, pago } = pedido;
  const preload = { descripcion, pago };

  const { errors, handleSubmit, register } = useForm({
    defaultValues: preload,
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

  return (
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
  );
}
