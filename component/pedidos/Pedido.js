import React from 'react';
import Link from 'next/link';
import { useMessage } from '../../hooks/useMessage';
import { useChangeStatus } from '../../hooks/useChangeStatus';
import { StatusChange } from './StatusChange';
import { EliminarPedido } from './EliminarPedido';

export default function Pedido({ pedido }) {
  const [mensaje, guardarMensaje, mostrarMensaje] = useMessage();
  const { id, total, cliente, estado, direccion, pago } = pedido;
  const { nombre, mail, telefono } = cliente;
  const { clase, setEstado, status } = useChangeStatus(estado);
  const pedidoMap = pedido.pedido.map(({ __typename, ...order }) => order);

  return (
    <div
      className={` ${clase} border-t-4 mt-4 bg-white rounded p-6 md:grid md:grid-cols-2 md:gap-4 shadow-lg`}
    >
      {mensaje && mostrarMensaje()}
      <div>
        <p className="font-bold text-gray-800">Cliente: {nombre}</p>

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

        <StatusChange
          id={id}
          status={status}
          setEstado={setEstado}
          guardarMensaje={guardarMensaje}
          cliente={cliente}
          pedidoMap={pedidoMap}
        />
      </div>

      <div>
        <h2 className="text-gray-800 font-bold mt-2">Pedido No. {id}</h2>
        {pedido.pedido.map((articulo) => (
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

        <div className="flex flex-row mb-6">
          <EliminarPedido id={id} />

          <div className=" px-3 md:mb-0">
            <Link href="/editarpedido/[id]" as={`/editarpedido/${id}`}>
              <button className=" uppercase text-xs font-bold mt-4 bg-green-600  px-5 py-2 inline-block text-white rounded leading-tight">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 ml-2"
                >
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </button>
            </Link>
          </div>

          <div className=" px-3  md:mb-0">
            <Link href="/verpedido/[id]" as={`/verpedido/${id}`}>
              <button className=" uppercase text-xs font-bold mt-4 bg-orange-600  px-5 py-2 inline-block text-white rounded leading-tight">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 ml-2"
                >
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
