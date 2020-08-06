import { useRouter } from 'next/router';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import Layaout from '../../component/customs/Layout';
import { OBTENER_PEDIDO } from '../../graphql/pedidos';
import { Ring } from 'react-awesome-spinners';
import NotLogded from '../../component/customs/NotLogged';
import { EliminarPedido } from '../../component/pedidos/EliminarPedido';

export default function VerPedido() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(OBTENER_PEDIDO, {
    variables: { id },
  });

  if (loading) return <Ring />;
  if (error) return <NotLogded />;

  const {
    cliente,
    descripcion,
    direccion,
    estado,
    pago,
    pedido,
    total,
    vendedor,
  } = data.obtenerPedido;
  const { mail, nombre, telefono } = cliente;
  const { nombre: vendedorNombre } = vendedor;

  return (
    <Layaout>
      <div
        className={`w-full border-blue-800 border-t-4 mt-4 bg-white rounded p-6 md:grid md:grid-cols-2 md:gap-4 shadow-lg`}
      >
        <div>
          {nombre && (
            <p className="flex items-center my-2">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              {nombre}
            </p>
          )}

          {mail && (
            <p className="flex items-center my-2">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              {mail}
            </p>
          )}

          {telefono && (
            <p className="flex items-center my-2">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              {telefono}
            </p>
          )}

          {direccion && (
            <p className="flex items-center my-2">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {direccion}
            </p>
          )}

          {pago && (
            <p className="flex items-center my-2">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              {pago}
            </p>
          )}

          {descripcion && (
            <p className="text-xl text-gray-600 ">{descripcion}</p>
          )}

          <h2 className="text-gray-800 font-bold mt-10">Estado Pedido:</h2>
          <p className="text-xl text-gray-600 uppercase">{estado}</p>
        </div>

        <div>
          <h2 className="text-gray-800 font-bold mt-2">Pedido No. {id}</h2>

          {pedido.map((articulo) => (
            <div key={articulo.id} className="mt-4">
              <p className="text-sm text-gray-600">
                Producto: {articulo.nombre}{' '}
              </p>
              <p className="text-sm text-gray-600">
                Cantidad: {articulo.cantidad}{' '}
              </p>
            </div>
          ))}

          <p className="text-gray-800 mt-3 font-bold ">
            Total a pagar:
            <span className="font-light"> $ {total}</span>
          </p>

          <h2 className="text-gray-800 font-bold mt-10">
            Vendedor:
            <span className="text-xl text-gray-600 capitalize mx-2">
              {vendedorNombre}
            </span>
          </h2>

          <div className="flex flex-row mb-6">
            <EliminarPedido id={id} />
          </div>
        </div>
      </div>

      <Link href="/pedidos">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-auto my-2"
        >
          Pedidos
        </button>
      </Link>
    </Layaout>
  );
}
