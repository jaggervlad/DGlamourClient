import { useState, useContext, useEffect } from 'react';
import PedidoContext from '../../context/pedidos/PedidoContex';

export default function AsignarCostEnv() {
  const [costo, setCosto] = useState(0);
  const { agregarCostEnv, actualizarTotal, costEnv } = useContext(
    PedidoContext
  );

  useEffect(() => {
    ActualizarCostEnv();
    actualizarTotal();
  }, [costo]);

  const ActualizarCostEnv = () => {
    agregarCostEnv(Number(costo));
  };

  return (
    <>
      <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">
        1.- Costo de Envio
      </p>

      <input
        placeholder="Costo Envio"
        className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:ml-4"
        onChange={(e) => setCosto(e.target.value)}
        value={costo}
      />
    </>
  );
}
