import Layout from '../component/Layout';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from '../schemas/productos';
import { useMutation, useQuery } from '@apollo/client';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { NUEVO_PRODUCTO, OBTENER_PRODUCTOS } from '../graphql/productos';
import { OBTENER_CATEGORIAS } from '../graphql/categorias';

export default function NuevoProducto() {
  const router = useRouter();
  const { data, loading, error } = useQuery(OBTENER_CATEGORIAS);
  const categorias = data?.obtenerCategorias;
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

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers) => {
      const {
        codigo,
        nombre,
        existencia,
        precio,
        marca,
        undMed,
        presentacion,
        categoria,
      } = values;
      try {
        const input = {
          codigo,
          nombre,
          existencia,
          precio,
          marca,
          undMed,
          presentacion,
          categoria,
        };
        await nuevoProducto({ variables: { input } });

        Swal.fire('Creado', 'Se creó producto correctamente', 'success');
        helpers.setSubmitting(false);
        router.push('/productos');
      } catch (error) {
        const errorMessage = error.message.replace('Graphql error: ', '');
        Swal.fire('Error', errorMessage, 'error');
      }
    },
  });

  if (loading) return 'Cargando..';
  if (error) return `Error || ${error}`;

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light text-center mt-8">
        Crear Nuevo Producto
      </h1>

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 "
            onSubmit={formik.handleSubmit}
          >
            <div className="block mb-4">
              <p className=" text-gray-700 text-sm font-bold mb-2">Codigo:</p>
              <span className="text-gray-800 text-xl">CODIGO CORRELATIVO</span>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Nombre Producto"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombre}
              />
            </div>

            {formik.touched.nombre && formik.errors.nombre ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.nombre}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="existencia"
              >
                Cantidad Disponible
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="existencia"
                type="number"
                placeholder="Cantidad Disponible"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.existencia}
              />
            </div>

            {formik.touched.existencia && formik.errors.existencia ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.existencia}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="precio"
              >
                Precio
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="precio"
                type="number"
                placeholder="Precio Producto"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.precio}
              />
            </div>

            {formik.touched.precio && formik.errors.precio ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.precio}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="marca"
              >
                Marca
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="marca"
                type="text"
                placeholder="Marca"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.marca}
              />
            </div>

            {formik.touched.marca && formik.errors.marca ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.marca}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="undMed"
              >
                Unidad de Medida
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="undMed"
                type="text"
                placeholder="Unidad de Medida"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.undMed}
              />
            </div>

            {formik.touched.undMed && formik.errors.undMed ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.undMed}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="presentacion"
              >
                Presentacion
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="presentacion"
                type="text"
                placeholder="Presentacion"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.presentacion}
              />
            </div>

            {formik.touched.presentacion && formik.errors.presentacion ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.presentacion}</p>
              </div>
            ) : null}

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
                id="categoria"
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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

            {formik.touched.categoria && formik.errors.categoria ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p>{formik.errors.categoria}</p>
              </div>
            ) : null}

            <input
              disabled={formik.isSubmitting || !formik.dirty}
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
