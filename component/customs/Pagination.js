import { useState } from 'react';
export function Pagination({ total, current, limit, pageAfter, pageBefore }) {
  const [pages] = useState(Math.ceil(Number(total) / limit));

  const btnBefore =
    current > 1 ? (
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mr-2"
        onClick={pageBefore}
      >
        &laquo; Anterior
      </button>
    ) : (
      ''
    );

  const btnAfter =
    current !== pages ? (
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={pageAfter}
      >
        Siguiente &raquo;
      </button>
    ) : (
      ''
    );
  return (
    <div className="mt-5 flex justify-center">
      {btnBefore}
      {btnAfter}
    </div>
  );
}
