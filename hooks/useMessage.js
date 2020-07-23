import { useState } from 'react';

export const useMessage = () => {
  const [mensaje, guardarMensaje] = useState(null);

  const mostrarMensaje = () => {
    return (
      <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
        <p>{mensaje}</p>
      </div>
    );
  };

  return [mensaje, guardarMensaje, mostrarMensaje];
};
