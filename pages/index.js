import Layout from '../component/customs/Layout';
import { useQuery } from '@apollo/client';
import { OBTENER_CLIENTES } from '../graphql/clientes';
import Cliente from '../component/Cliente';
import NotLogged from '../component/customs/NotLogged';
import { Ring } from 'react-awesome-spinners';
import { NewLink } from '../component/customs/NewLink';
import { Title } from '../component/customs/Title';
import { useState, useEffect } from 'react';

export default function Index() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, error, fetchMore } = useQuery(OBTENER_CLIENTES);
  const [search, setSearch] = useState('');
  const [filterClients, setFilterClients] = useState([]);
  const obtenerClientes = data?.obtenerClientes;

  useEffect(() => {
    if (obtenerClientes) {
      setFilterClients(
        obtenerClientes.filter((client) =>
          client.nombre.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, obtenerClientes]);

  if (loading) return <Ring />;
  if (error) return <NotLogged />;

  const ClientsTable = () => {
    return (
      <div class="relative">
        <div className="h-screen overflow-y-scroll">
          <table className="table-auto shadow-md mt-10 w-full w-lg">
            <thead className="bg-gray-800">
              <tr className="text-white">
                <th className="py-2">Nombre</th>
                <th className="py-2">Cedula</th>
                <th className="py-2">Telefono</th>
                <th className="py-2">Email</th>
                <th className="py-2">Eliminar</th>
                <th className="py-2">Editar</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {filterClients.map((cliente) => (
                <Cliente key={cliente.id} cliente={cliente} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  return (
    <Layout>
      <Title title={`clientes`} />

      <div className="grid grid-cols-2 gap-2 w-1/3">
        <NewLink model={`nuevo`} ruta={`nuevocliente`} />
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 font-bold mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Buscar.."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filterClients.length === 0 || loading ? (
        <p className="mt-5 text-center text-2xl">Cargando..</p>
      ) : (
        <ClientsTable />
      )}
    </Layout>
  );
}
