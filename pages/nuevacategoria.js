import Layout from '../component/customs/Layout';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from '../schemas/categorias';
import { useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { OBTENER_CATEGORIAS, NUEVA_CATEGORIA } from '../graphql/categorias';
import { TitleNew } from '../component/customs/TitleNew';

export default function NuevoProducto() {
  const router = useRouter();
  const [nuevaCategoria] = useMutation(NUEVA_CATEGORIA, {
    update(cache, { data: nuevaCategoria }) {
      const { obtenerCategorias } = cache.readQuery({
        query: OBTENER_CATEGORIAS,
      });

      cache.writeQuery({
        query: OBTENER_CATEGORIAS,
        data: {
          obtenerCategorias: [...obtenerCategorias, nuevaCategoria],
        },
      });
    },
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers) => {
      const { nombre } = values;
      try {
        const input = {
          nombre,
        };
        await nuevaCategoria({ variables: { input } });

        Swal.fire('Creado', 'Categoria Creada', 'success');
        helpers.setSubmitting(false);
        router.push('/categorias');
      } catch (error) {
        const errorMessage = error.message.replace('Graphql error: ', '');
        Swal.fire('Error', errorMessage, 'error');
      }
    },
  });

  return (
    <Layout>
      <TitleNew title={`nueva categoria`} />

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 "
            onSubmit={formik.handleSubmit}
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
                id="nombre"
                type="text"
                placeholder="Nombre Categoria"
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

            <input
              disabled={formik.isSubmitting || !formik.dirty}
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
              value="enviar"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
