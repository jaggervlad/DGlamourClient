import { useRouter } from 'next/router';
import Layout from '../component/customs/Layout';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from '../schemas/clientes';
import { useMutation } from '@apollo/client';
import { NUEVO_CLIENTE, OBTENER_CLIENTES } from '../graphql/clientes';
import { TitleNew } from '../component/customs/TitleNew';

export default function NuevoCliente() {
  const router = useRouter();
  const [nuevoCliente] = useMutation(NUEVO_CLIENTE, {
    update(cache, { data: nuevoCliente }) {
      const { obtenerClientes } = cache.readQuery({
        query: OBTENER_CLIENTES,
      });
      cache.writeQuery({
        query: OBTENER_CLIENTES,
        data: {
          obtenerClientes: [...obtenerClientes, nuevoCliente],
        },
      });
    },
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers) => {
      const { cedula, nombre, mail, telefono, direccion, ciudad } = values;
      const input = { cedula, nombre, mail, telefono, direccion, ciudad };
      try {
        await nuevoCliente({
          variables: { input },
        });
        Swal.fire('Creado', 'Cliente creado correctamente!', 'success');
        helpers.setSubmitting(false);
        router.push('/');
      } catch (error) {
        const errorMessage = error.message.replace('Graphql error: ', '');
        Swal.fire('Error', errorMessage, 'error');
      }
    },
  });

  return (
    <Layout>
      <TitleNew title={`nuevo cliente`} />

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
            onSubmit={formik.handleSubmit}
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
                htmlFor="cedula"
              >
                Numero de Cedula
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cedula"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cedula}
              />
            </div>

            {formik.touched.cedula && formik.errors.cedula ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.cedula}</p>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.direccion}
              />
            </div>

            {formik.touched.direccion && formik.errors.direccion ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.direccion}</p>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mail}
              />
            </div>

            {formik.touched.mail && formik.errors.mail ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.mail}</p>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telefono}
              />
            </div>

            {formik.touched.telefono && formik.errors.telefono ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.telefono}</p>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ciudad}
              />
            </div>

            {formik.touched.ciudad && formik.errors.ciudad ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.ciudad}</p>
              </div>
            ) : null}

            <input
              disabled={formik.isSubmitting || !formik.dirty}
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
              value="Registrar Cliente"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
