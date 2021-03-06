import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import { useQuery } from '@apollo/client';
import PedidoContext from '../../context/pedidos/PedidoContex';
import { ALL_PRODUCTS } from '../../graphql/productos';

export default function AsignarProductos() {
  const [productos, setProductos] = useState([]);
  const { agregarProducto, actualizarTotal } = useContext(PedidoContext);
  const { data, loading, error } = useQuery(ALL_PRODUCTS);

  useEffect(() => {
    if (productos === null) {
      setProductos([]);
      actualizarTotal();
    } else {
      agregarProducto(productos);
      actualizarTotal();
    }
  }, [productos]);

  const seleccionarProductos = (productos) => {
    setProductos(productos);
  };

  if (loading) return 'Cargando...';
  if (error) return `Erro ${error.message}`;
  const obtenerProductos = data?.allProducts;

  return (
    <>
      <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">
        2.- Asignar Productos
      </p>

      <Select
        className="mt-3"
        isMulti={true}
        options={obtenerProductos}
        onChange={(opc) => seleccionarProductos(opc)}
        getOptionValue={(opc) => opc.id}
        getOptionLabel={(opc) =>
          `${opc.nombre}  |  Stock: ${opc.existencia} | Marca: ${opc.marca}`
        }
        placeholder="Seleccionar Productos"
        noOptionsMessage={() => 'No hay resultados'}
      />
    </>
  );
}
