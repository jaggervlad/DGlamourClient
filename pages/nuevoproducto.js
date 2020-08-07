import Layout from '../component/customs/Layout';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { NUEVO_PRODUCTO, OBTENER_PRODUCTOS } from '../graphql/productos';
import { OBTENER_CATEGORIAS } from '../graphql/categorias';
import { TitleNew } from '../component/customs/TitleNew';
import { ErrorMessage } from '@hookform/error-message';
import { Ring } from 'react-awesome-spinners';
import NotLogded from '../component/customs/NotLogged';

export default function NuevoProducto() {
  let categorias;
  const router = useRouter();
  const { data, loading, error } = useQuery(OBTENER_CATEGORIAS);
  const [nuevoProducto] = useMutation(NUEVO_PRODUCTO, {
    update(cache, { data: nuevoProducto }) {
      const { obtenerProductos } = cache.readQuery({
        query: OBTENER_PRODUCTOS,
      });

      cache.writeQuery({
        query: OBTENER_PRODUCTOS,
        data: {
          obtenerProductos: [...obtenerProductos, nuevoProducto],
        },
      });
    },
  });

  const { errors, register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    const {
      nombre,
      existencia,
      precio,
      marca,
      undMed,
      presentacion,
      categoria,
    } = data;
    try {
      const input = {
        nombre,
        existencia: Number(existencia),
        precio: +precio,
        marca,
        undMed,
        presentacion,
        categoria,
      };
      await nuevoProducto({ variables: { input } });

      e.target.reset();
      router.push('/productos');
      Swal.fire('Creado', 'Se creó producto correctamente', 'success');
    } catch (error) {
      const errorMessage = error.message.replace('Graphql error: ', '');
      Swal.fire('Error', errorMessage, 'error');
    }
  };

  if (loading) return <Ring />;
  if (error) return <NotLogded />;
  if (data && data.obtenerCategorias) {
    categorias = data.obtenerCategorias;
  }

  return (
    <Layout>
      <TitleNew title={`nuevo producto`} />

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 "
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
                placeholder="Nombre Producto"
                ref={register({ required: true })}
              />
            </div>
            <ErrorMessage errors={errors} name="nombre" />

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="existencia"
              >
                Cantidad Disponible
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="existencia"
                type="number"
                placeholder="Cantidad Disponible"
                ref={register({ required: true })}
              />
            </div>
            <ErrorMessage errors={errors} name="existencia" />

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
                placeholder="Precio Producto"
                ref={register({ required: true })}
              />
            </div>
            <ErrorMessage errors={errors} name="precio" />

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
                placeholder="Marca"
                ref={register({ required: true })}
              />
            </div>
            <ErrorMessage errors={errors} name="marca" />

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
                placeholder="Unidad de Medida"
                ref={register({ required: true })}
              />
            </div>
            <ErrorMessage errors={errors} name="undMed" />

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="presentacion"
              >
                Presentacion
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="presentacion"
                placeholder="Presentacion"
                ref={register({ require: true })}
              />
            </div>
            <ErrorMessage errors={errors} name="presentacion" />

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
            <ErrorMessage errors={errors} name="categoria" />

            <input
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
              value="Agregar Nuevo Producto"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
