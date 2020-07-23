import React from 'react';
import Layout from './Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, useApolloClient } from '@apollo/client';
import { AUTENTICAR_USUARIO } from '../graphql/usuarios';
import { useRouter } from 'next/router';
import { useMessage } from '../hooks/useMessage';

export default function Autenticar() {
  const router = useRouter();
  const [mensaje, guardarMensaje, mostrarMensaje] = useMessage();
  const client = useApolloClient();
  const [autenticarUsuario] = useMutation(AUTENTICAR_USUARIO);

  const initialValues = {
    username: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Minimo 3 caracteres')
      .max(20, 'Maximo 20 caracteres')
      .required('El nombre de usuario es obligatorio'),
    password: Yup.string()
      .min(3, 'Minimo 3 caracteres')
      .max(20, 'Maximo 20 caracteres')
      .required('La contraseña es obligatoria'),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (data, helpers) => {
      const { username, password } = data;
      const input = { username, password };

      try {
        await client.resetStore();
        await autenticarUsuario({ variables: { input } });
        guardarMensaje('Autenticando......');

        setTimeout(() => {
          guardarMensaje(null);
          helpers.setSubmitting(false);
          router.push('/');
        }, 1000);
      } catch (error) {
        guardarMensaje(error.message.replace('Graphql error:', ''));

        setTimeout(() => {
          guardarMensaje(null);
        }, 3000);
      }
    },
  });

  return (
    <Layout>
      <h1 className="text-center text-2xl text-white font-light">Login</h1>

      {mensaje && mostrarMensaje()}
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          <form
            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
            onSubmit={formik.handleSubmit}
          >
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
                type="username"
                placeholder="Nombre de Usuario"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
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
                Password
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password Usuario"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>

            {formik.touched.password && formik.errors.password ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p>{formik.errors.password}</p>
              </div>
            ) : null}

            <input
              disabled={formik.isSubmitting}
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercas hover:cursor-pointer hover:bg-gray-900"
              value="Iniciar Sesión"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
