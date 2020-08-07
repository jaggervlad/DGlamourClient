import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { ACTUALIZAR_PRODUCTO } from '../../graphql/productos';
import Swal from 'sweetalert2';
import { ErrorMessage } from '@hookform/error-message';
import { useRouter } from 'next/router';

export function EditForm({ producto, id, categorias }) {
  const router = useRouter();
  const [actualizarProducto] = useMutation(ACTUALIZAR_PRODUCTO);
  const {
    nombre,
    existencia,
    precio,
    marca,
    undMed,
    categoria,
    presentacion,
  } = producto;
  const preoload = {
    nombre,
    existencia,
    precio,
    marca,
    undMed,
    presentacion,
    categoria: categoria.id,
  };

  const { register, errors, handleSubmit } = useForm({
    defaultValues: preoload,
  });

  const onSubmit = async (data, e) => {
    try {
      const {
        nombre,
        existencia,
        precio,
        marca,
        undMed,
        presentacion,
        categoria,
      } = data;
      const input = {
        nombre,
        existencia: Number(existencia),
        precio: +precio,
        marca,
        undMed,
        presentacion,
        categoria,
      };
      await actualizarProducto({
        variables: { id, input },
      });
      e.target.reset();
      router.push('/productos');
      Swal.fire(
        'Correcto',
        'El producto se actualizó correctamente',
        'success'
      );
    } catch (error) {
      const errorMessage = error.message.replace('Graphql error: ', '');
      Swal.fire('Error', errorMessage, 'error');
    }
  };
  return (
    <form
      className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nombre"
        >
          Nombre
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="nombre"
          type="text"
          ref={register({ required: true })}
        />
      </div>
      {errors.nombre && (
        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <ErrorMessage errors={errors} name="nombre" />
        </div>
      )}

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="existencia"
        >
          Cantidad
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="existencia"
          type="number"
          ref={register({ required: true })}
        />
      </div>
      {errors.existencia && (
        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <ErrorMessage errors={errors} name="existencia" />
        </div>
      )}

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="precio"
        >
          Precio
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="precio"
          type="text"
          ref={register({ required: true })}
        />
      </div>
      {errors.precio && (
        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <ErrorMessage errors={errors} name="precio" />
        </div>
      )}

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="marca"
        >
          Marca
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="marca"
          type="text"
          ref={register({ required: true })}
        />
      </div>
      {errors.marca && (
        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <ErrorMessage errors={errors} name="marca" />
        </div>
      )}

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="undMed"
        >
          Unidad de Medida
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="undMed"
          type="text"
          ref={register({ required: true })}
        />
      </div>
      {errors.undMed && (
        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <ErrorMessage errors={errors} name="undMed" />
        </div>
      )}

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="presentacion"
        >
          Presentación
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="presentacion"
          type="text"
          ref={register({ required: true })}
        />
      </div>
      {errors.presentacion && (
        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <ErrorMessage errors={errors} name="presentacion" />
        </div>
      )}

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="categoria"
        >
          Categoria
        </label>

        <select
          name="categoria"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="categoria"
          ref={register({ required: true })}
        >
          {categorias.map((categoria) => (
            <option
              key={categoria.id}
              value={categoria.id}
              label={categoria.nombre}
            />
          ))}
        </select>
      </div>

      <input
        type="submit"
        className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
        value="Guardar Cambios"
      />
    </form>
  );
}
