import Link from 'next/link';

export function NewLink({ model, ruta }) {
  return (
    <Link href={`/${ruta}`}>
      <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold w-full lg:w-auto text-center ml-2">
        {model}
      </a>
    </Link>
  );
}
