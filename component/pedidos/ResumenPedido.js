import { useContext } from 'react';
import PedidoContext from '../../context/pedidos/PedidoContex';
import ResumenProducto from './ResumenProducto';

export default function ResumenPedido() {
  const { productos } = useContext(PedidoContext);

  return (
    <>
      <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold mb-4">
        3.- Ajusta las cantidades del Producto
      </p>

      {productos?.length > 0 ? (
        <>
          {productos.map((producto) => (
            <ResumenProducto key={producto.id} producto={producto} />
          ))}
        </>
      ) : (
        <p className="mt-5 text-sm">Aún no hay productos</p>
      )}
    </>
  );
}
