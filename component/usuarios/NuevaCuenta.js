import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../customs/Layout';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from '../../schemas/usuarios';
import { useMutation } from '@apollo/client';
import { useMessage } from '../../hooks/useMessage';
import { NUEVA_CUENTA } from '../../graphql/usuarios';

const NuevaCuenta = () => {
  const router = useRouter();
  const [mensaje, guardarMensaje, mostrarMensaje] = useMessage();
  const [nuevoUsuario] = useMutation(NUEVA_CUENTA);

  const roles = [{ label: 'USUARIO' }, { label: 'ADMINISTRADOR' }];

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, herlpers) => {
      const { nombre, username, password, rol } = values;
      const input = {
        nombre,
        username,
        password,
        rol,
      };
      try {
        const { data } = await nuevoUsuario({
          variables: { input },
        });

        guardarMensaje(
          `Se creo correctamente el Usuario: ${data.nuevoUsuario.nombre} `
        );

        setTimeout(() => {
          guardarMensaje(null);
          herlpers.setSubmitting(false);
          router.push('/login');
        }, 2000);
      } catch (error) {
        guardarMensaje(error.message.replace('GraphQL error: ', ''));
        setTimeout(() => {
          guardarMensaje(null);
        }, 3000);
      }
    },
  });

  return (
    <>
      <Layout>
        {mensaje && mostrarMensaje()}

        <h1 className="text-center text-2xl text-white font-light">
          Crear Nueva Cuenta
        </h1>

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form
              className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
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
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {formik.touched.nombre && formik.errors.nombre ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p>{formik.errors.nombre}</p>
                </div>
              ) : null}

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Nombre de Usuario
                </label>

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {formik.touched.username && formik.errors.username ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p>{formik.errors.username}</p>
                </div>
              ) : null}

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Contraseña
                </label>

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {formik.touched.password && formik.errors.password ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="rol"
                >
                  Rol de Usuario
                </label>

                <select
                  name="rol"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="rol"
                  value={formik.values.rol}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {roles.map((role, index) => (
                    <option
                      key={index}
                      value={role.label}
                      label={role.label}
                      defaultValue={role.label}
                    />
                  ))}
                </select>
              </div>

              {formik.touched.rol && formik.errors.rol ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p>{formik.errors.rol}</p>
                </div>
              ) : null}

              <input
                disabled={formik.isSubmitting || !formik.dirty}
                type="submit"
                className="bg-gray-800 w-full mt-5 p-2 text-white uppercas hover:cursor-pointer hover:bg-gray-900"
                value="Crear Cuenta"
              />
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NuevaCuenta;
