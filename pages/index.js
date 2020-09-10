import Layout from '../component/customs/Layout';
import { useQuery } from '@apollo/client';
import { OBTENER_CLIENTES } from '../graphql/clientes';
import Cliente from '../component/Cliente';
import NotLogged from '../component/customs/NotLogged';
import { Ring } from 'react-awesome-spinners';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';

const ClientsTable = () => {
  const { data, loading, error } = useQuery(OBTENER_CLIENTES);
  const obtenerClientes = data?.obtenerClientes;

  if (loading) return <Ring />;
  if (error) return <NotLogged />;

  return (
    <div class="relative">
      <div className="h-screen overflow-y-scroll">
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
    </div>
  );
};
export default function Index() {
  return (
    <Layout>
      <Title title={`clientes`} />
      <NewLink model={`nuevo`} ruta={`nuevocliente`} />

      <div className="overflow-x-scroll">
        <ClientsTable />
      </div>
    </Layout>
  );
}
