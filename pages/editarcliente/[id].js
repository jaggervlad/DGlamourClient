import { useRouter } from 'next/router';
import Layout from '../../component/customs/Layout';
import { useQuery, useMutation } from '@apollo/client';
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import { OBTENER_CLIENTE, ACTUALIZAR_CLIENTE } from '../../graphql/clientes';
import { validationSchema } from '../../schemas/clientes';
import { TitleNew } from '../../component/customs/TitleNew';

export default function EditarCliente() {
  const router = useRouter();
  const id = router.query.id;
  const { data, loading, error } = useQuery(OBTENER_CLIENTE, {
    variables: { id },
  });
  const [actualizarCliente] = useMutation(ACTUALIZAR_CLIENTE);
  const obtenerCliente = data?.obtenerCliente;

  const actualizarInfoCliente = async (values, helpers) => {
    const { cedula, nombre, direccion, ciudad, mail, telefono } = values;
    const input = { cedula, nombre, direccion, ciudad, mail, telefono };
    try {
      await actualizarCliente({ variables: { id, input } });
      Swal.fire(
        'Actualizado',
        'El cliente se actualizo correctamente',
        'success'
      );
      helpers.setSubmitting(false);
      router.push('/');
    } catch (error) {
      const errorMessage = error.message.replace('Graphql error: ', '');
      Swal.fire('Error', errorMessage, 'error');
    }
  };

  if (loading) return 'Cargando...';
  if (error) return `Error || ${error.message}`;

  return (
    <Layout>
      <TitleNew title={`editar cliente`} />

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <Formik
            enableReinitialize
            initialValues={obtenerCliente}
            validationSchema={validationSchema}
            onSubmit={(valores, helpers) => {
              actualizarInfoCliente(valores, helpers);
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
            }) => {
              return (
                <form
                  className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="nombre"
                    >
                      Nombre Completo
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="nombre"
                      type="text"
                      placeholder="Nombre Cliente"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nombre}
                    />
                  </div>

                  {touched.nombre && errors.nombre ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{errors.nombre}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="cedula"
                    >
                      Numero de Cedula
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="cedula"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cedula}
                    />
                  </div>

                  {touched.cedula && errors.cedula ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{errors.cedula}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="direccion"
                    >
                      Direccion
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="direccion"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.direccion}
                    />
                  </div>

                  {touched.direccion && errors.direccion ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{errors.direccion}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="mail"
                    >
                      Email
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="mail"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mail}
                    />
                  </div>

                  {touched.mail && errors.mail ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{errors.mail}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="telefono"
                    >
                      Teléfono
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="telefono"
                      type="number"
                      placeholder="Teléfono Cliente"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.telefono}
                    />
                  </div>

                  {touched.mail && errors.mail ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{errors.mail}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="ciudad"
                    >
                      Ciudad
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="ciudad"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ciudad}
                    />
                  </div>

                  {touched.ciudad && errors.ciudad ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{errors.ciudad}</p>
                    </div>
                  ) : null}

                  <input
                    disabled={isSubmitting}
                    type="submit"
                    className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
                    value="Editar Cliente"
                  />
                </form>
              );
            }}
          </Formik>
           
        </div>
      </div>
    </Layout>
  );
}
