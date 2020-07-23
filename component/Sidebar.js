import { useRouter } from 'next/router';
import Link from 'next/link';
const Sidebar = () => {
  const router = useRouter();

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

      <div className="sm:mt-10">
        <p className="text-white text-2xl font-black">Otras Opciones</p>
      </div>
      <nav className="mt-5 list-none">
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
    </aside>
  );
};

export default Sidebar;
