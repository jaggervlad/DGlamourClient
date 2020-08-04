import { useRouter } from 'next/router';
import Link from 'next/link';

export default function AdminOpts() {
  const router = useRouter();
  return (
    <>
      <div className="sm:mt-10">
        <p className="text-white text-2xl font-black">Otras Opciones</p>
      </div>
      <nav className="mt-5 list-none">
        <li
          className={
            router.pathname === '/usuarios' ? 'bg-blue-800 p-2' : 'p-2'
          }
        >
          <Link href="/usuarios">
            <a className="text-white block">Registro de Usuarios</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/mejoresvendedores' ? 'bg-blue-800 p-2' : 'p-2'
          }
        >
          <Link href="/recordvendedores">
            <a className="text-white block">Record por Vendedores</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/mejoresclientes' ? 'bg-blue-800 p-2' : 'p-2'
          }
        >
          <Link href="/recordclientes">
            <a className="text-white block">Record por Clientes</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/mejoresclientes' ? 'bg-blue-800 p-2' : 'p-2'
          }
        >
          <Link href="/mejoresclientes">
            <a className="text-white block">Record por Categoria</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/mejoresclientes' ? 'bg-blue-800 p-2' : 'p-2'
          }
        >
          <Link href="/mejoresclientes">
            <a className="text-white block">Record por Productos</a>
          </Link>
        </li>
      </nav>
    </>
  );
}
