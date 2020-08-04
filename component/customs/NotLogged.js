import Link from 'next/link';
export default function NotLogded() {
  return (
    <div className="w-full mx-5 my-5">
      <p className="mb-2">Upps parece que debes inciar sesión</p>
      <Link href="/login">
        <a className="  bg-gray-800 hover:bg-gray-700 text-white text-center font-bold py-2 px-4 rounded w-1/2  mx-auto my-12">
          Inicia Sesion
        </a>
      </Link>
    </div>
  );
}
