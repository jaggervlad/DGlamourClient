import Layout from '../../component/customs/Layout';
import { Formik } from 'formik';
import { validationSchema } from '../../schemas/categorias';
import { useMutation, useQuery } from '@apollo/client';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import {
  OBTENER_CATEGORIA,
  ACTUALIZAR_CATEGORIA,
} from '../../graphql/categorias';
import { TitleNew } from '../../component/customs/TitleNew';
import { Ring } from 'react-awesome-spinners';
import NotLogded from '../../component/customs/NotLogged';

export default function EditarCategoria() {
  const router = useRouter();
  const id = router.query.id;
  const { data, loading, error } = useQuery(OBTENER_CATEGORIA, {
    variables: { id },
  });
  const obtenerCategoria = data?.obtenerCategoria;
  const [actualizarCategoria] = useMutation(ACTUALIZAR_CATEGORIA);

  if (loading) return <Ring />;
  if (error) return <NotLogded />;

  return (
    <Layout>
      <TitleNew title={`editar categoria`} />

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <Formik
            enableReinitialize
            initialValues={obtenerCategoria}
            validationSchema={validationSchema}
            onSubmit={async (values, helpers) => {
              const { nombre } = values;
              const input = { nombre };
              try {
                await actualizarCategoria({ variables: { id, input } });
                helpers.setSubmitting(false);
                router.push('/categorias');
                Swal.fire(
                  'Correct',
                  'La categoria se actualizo correctamente',
                  'success'
                );
              } catch (error) {
                const errorMessage = error.message.replace(
                  'Graphql error: ',
                  ''
                );
                Swal.fire('Error', errorMessage, 'error');
              }
            }}
          >
            {({
              values,
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              isSubmitting,
              dirty,
            }) => (
              <form
                className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 "
                onSubmit={handleSubmit}
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
                    type="text"
                    name="nombre"
                    value={values.nombre}
                    placeholder="Nombre Producto"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                {touched.nombre && errors.nombre ? (
                  <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{errors.nombre}</p>
                  </div>
                ) : null}

                <input
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
                  value="enviar"
                />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
}
