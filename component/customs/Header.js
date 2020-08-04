import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useAuth from '../../hooks/useAuth';

export default function Header() {
  const router = useRouter();
  const { isLogged, usuario } = useAuth();

  useEffect(() => {
    if (!isLogged) return router.push('/login');
  }, [isLogged, router]);
  const { nombre, username } = usuario.usuario;

  return (
    <div className="sm:flex sm:justify-between mb-6">
      <p className="mr-2 mb-5 lg:mb-0 capitalize">
        Hola: {nombre} @{username}
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
