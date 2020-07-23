import Link from 'next/link';
import Layout from '../component/Layout';
import { useQuery, useApolloClient } from '@apollo/client';
import { OBTENER_CLIENTES } from '../graphql/clientes';
import Cliente from '../component/Cliente';

const Index = () => {
  const { data, loading, error } = useQuery(OBTENER_CLIENTES);
  const obtenerClientes = data?.obtenerClientes;

  if (loading) return 'Cargando...';
  if (error) return `Error || ${error.message}`;

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Clientes</h1>

      <Link href="/nuevocliente">
        <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold w-full lg:w-auto text-center">
          Nuevo Cliente
        </a>
      </Link>

      <div className="overflow-x-scroll">
        <table className="table-auto shadow-md mt-10 w-full w-lg">
          <thead className="bg-gray-800">
            <tr className="text-white">
              <th className="w-1/5 py-2">Nombre</th>
              <th className="w-1/5 py-2">Cedula</th>
              <th className="w-1/5 py-2">Telefono</th>
              <th className="w-1/5 py-2">Email</th>
              <th className="w-1/8 py-2">Eliminar</th>
              <th className="w-1/8 py-2">Editar</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {obtenerClientes.map((cliente) => (
              <Cliente key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Index;
