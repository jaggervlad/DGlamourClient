import Link from 'next/link';
import { EliminarUsuario } from './EliminarUsuario';
export default function Usuario({ usuario }) {
  const { id, nombre, username, rol } = usuario;
  const LinkVerUsuario = () => (
    <Link href="/editarusuario/[id]" as={`/editarusuario/${id}`}>
      <button
        type="button"
        className="flex justify-center items-center bg-green-600 py-2 px-2 w-full text-white rounded"
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
  );
  return (
    <tr className="text-left">
      <td className="border px-4 py-2 ">{nombre} </td>
      <td className="border px-4 py-2 ">{username} </td>
      <td className="border px-4 py-2 ">{rol} </td>
      <td className="border px-4 py-2">
        <EliminarUsuario id={id} />
      </td>
      <td className="border px-4 py-2">
        <LinkVerUsuario />
      </td>
    </tr>
  );
}
