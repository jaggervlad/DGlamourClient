import React from 'react';
import Link from 'next/link';

export default function PedidoPagado({ pedido }) {
  const { id, total, cliente, estado, direccion } = pedido;
  const { nombre } = cliente;

  const PedidoTable = () => (
    <tr className="text-center">
      <td className="border px-4 py-2">{id.slice(5, 10)}</td>
      <td className="border w-1/4 px-4 py-2">{nombre}</td>
      <td className="border px-4 py-2">{direccion}</td>
      <td className="border px-4 py-2">{total}</td>
      <td className="border px-4 py-2">{estado}</td>
      <td className="border px-4 py-2">
        <Link href="/verpedido/[id]" as={`/verpedido/${id}`}>
          <button
            type="button"
            className="flex justify-center items-center bg-blue-800 py-2 px-2 w-full mx-auto text-white rounded"
          >
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
      </td>
    </tr>
  );

  return <PedidoTable />;
}
