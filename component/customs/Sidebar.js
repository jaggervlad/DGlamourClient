import { useRouter } from 'next/router';
import Link from 'next/link';
import useAuth from '../../hooks/useAuth';
import AdminOpts from './OptsSidebarAdmin';
const Sidebar = () => {
  const router = useRouter();
  const { usuario } = useAuth();
  const { rol } = usuario.usuario;

  return (
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
      <div>
        <p className="text-white text-2xl font-black capitalize">
          gestión comercial
        </p>
      </div>

      <nav className="mt-5 list-none">
        <li className={router.pathname === '/' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href="/">
            <a className="text-white block">Clientes</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/productos' ? 'bg-blue-800 p-2' : 'p-2'
          }
        >
          <Link href="/productos">
            <a className="text-white block">Productos</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/categoria' ? 'bg-blue-800 p-2' : 'p-2'
          }
        >
          <Link href="/categorias">
            <a className="text-white block">Categorias</a>
          </Link>
        </li>
        <li
          className={router.pathname === '/pedidos' ? 'bg-blue-800 p-2' : 'p-2'}
        >
          <Link href="/pedidos">
            <a className="text-white block">Pedidos</a>
          </Link>
        </li>
      </nav>

      {rol === 'ADMINISTRADOR' && <AdminOpts />}
    </aside>
  );
};

export default Sidebar;
