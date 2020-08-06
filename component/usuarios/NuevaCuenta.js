import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../customs/Layout';
import { initialValues, validationSchema } from '../../schemas/usuarios';
import { useMutation } from '@apollo/client';
import { NUEVA_CUENTA, OBTENER_USUARIOS } from '../../graphql/usuarios';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const NuevaCuenta = () => {
  const router = useRouter();
  const [nuevoUsuario] = useMutation(NUEVA_CUENTA, {
    update(cache, { data: nuevoUsuario }) {
      const { obtenerUsuarios } = cache.readQuery({ query: OBTENER_USUARIOS });

      cache.writeQuery({
        query: OBTENER_USUARIOS,
        data: {
          obtenerUsuarios: [...obtenerUsuarios, nuevoUsuario],
        },
      });
    },
  });
  const { errors, register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    const { nombre, username, password, rol } = data;
    const input = {
      nombre,
      username,
      password,
      rol,
    };
    try {
      await nuevoUsuario({
        variables: { input },
      });

      e.target.reset();
      router.push('/usuarios');
      Swal.fire('Exito!', 'Cuenta Creada!', 'success');
    } catch (error) {
      const errorMessage = error.message.replace('Graphql error: ', '');
      Swal.fire('Error', errorMessage, 'error');
    }
  };

  return (
    <>
      <Layout>
        <h1 className="text-center text-2xl text-white font-light">
          Crear Nueva Cuenta
        </h1>

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form
              className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit(onSubmit)}
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
                  name="nombre"
                  type="text"
                  ref={register({ required: 'El campo es obligatorio' })}
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
                  htmlFor="username"
                >
                  Nombre de Usuario
                </label>

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="username"
                  type="text"
                  ref={register({ required: 'El campo es obligatorio' })}
                />
              </div>
              {errors.username && (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <ErrorMessage errors={errors} name="username" />
                </div>
              )}

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Contraseña
                </label>

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                  ref={register({ required: 'El campo es obligatorio' })}
                />
              </div>
              {errors.password && (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <ErrorMessage errors={errors} name="password" />
                </div>
              )}

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="rol"
                >
                  Rol de Usuario
                </label>

                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  name="rol"
                  ref={register({ required: 'Este campo es obligatorio' })}
                >
                  <option value="">Selecciona</option>
                  <option value="USUARIO">USUARIO</option>
                  <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                </select>
              </div>
              {errors.rol && (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <ErrorMessage errors={errors} name="rol" />
                </div>
              )}

              <input
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
