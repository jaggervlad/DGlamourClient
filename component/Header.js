import { useContext } from 'react';
import { useRouter } from 'next/router';
import { UsuarioContext } from '../context/usuarios/UsuarioContex';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const {
    value: { usuario },
  } = useContext(UsuarioContext);
  if (!usuario) router.push('/login');
  const { nombre, username } = usuario;

  return (
    <div className="sm:flex sm:justify-between mb-6">
      <p className="mr-2 mb-5 lg:mb-0 uppercase">
        Hola: {nombre} - @{username}
      </p>

      <Link href="/cerrarsesion">
        <button
          type="button"
          className="bg-blue-800 w-full sm:w-auto font-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md"
        >
          Cerrar Sesión
        </button>
      </Link>
    </div>
  );
}
