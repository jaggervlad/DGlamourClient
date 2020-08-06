import React from 'react';
import Layout from '../component/customs/Layout';
import Usuario from '../component/usuarios/Usuario';
import { useQuery, gql } from '@apollo/client';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';
import { OBTENER_USUARIOS } from '../graphql/usuarios';

export default function Pedidos() {
  let obtenerUsuarios;
  const { data, loading, error } = useQuery(OBTENER_USUARIOS);

  if (loading) return 'Cargando...';
  if (error) return `Error || ${error.message}`;
  if (data) {
    obtenerUsuarios = data?.obtenerUsuarios;
  }

  console.log(obtenerUsuarios);
  const TablePedido = () => (
    <table className="table-auto shadow-md mt-10 w-full w-lg">
      <thead className="bg-gray-800">
        <tr className="text-white">
          <th className="w-1/5 py-2">Nombre</th>
          <th className="w-1/5 py-2">Username</th>
          <th className="w-1/5 py-2">Rol</th>
          <th className="w-1/5 py-2">Eliminar</th>
          <th className="w-1/5 py-2">Editar</th>
        </tr>
      </thead>

      <tbody className="bg-white">
        {obtenerUsuarios.map((usuario) => (
          <Usuario key={usuario.id} usuario={usuario} />
        ))}
      </tbody>
    </table>
  );

  return (
    <Layout>
      <Title title={`usuarios`} />

      <NewLink model={`nuevo usuario`} ruta={`registro`} />

      {obtenerUsuarios.length === 0 ? (
        <p className="mt-5 text-center text-2xl">No hay usuarios</p>
      ) : (
        <TablePedido />
      )}
    </Layout>
  );
}
