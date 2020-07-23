import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import { useQuery } from '@apollo/client';
import PedidoContext from '../../context/pedidos/PedidoContex';
import { OBTENER_CLIENTES } from '../../graphql/clientes';

export default function AsignarCliente() {
  const [cliente, setCliente] = useState({});
  const { agregarCliente } = useContext(PedidoContext);
  const { data, loading, error } = useQuery(OBTENER_CLIENTES);

  useEffect(() => {
    agregarCliente(cliente);
  }, [cliente]);

  const seleccionarCliente = (client) => {
    setCliente(client);
  };

  if (loading) return null;
  if (error) return null;
  const obtenerClientes = data?.obtenerClientes;

  return (
    <>
      <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">
        1.- Asigna un Cliente al pedido
      </p>

      <Select
        className="mt-3"
        options={obtenerClientes}
        onChange={(opc) => seleccionarCliente(opc)}
        getOptionValue={(opc) => opc.id}
        getOptionLabel={(opc) => opc.nombre}
        placeholder="Seleccionar Cliente"
        noOptionsMessage={() => 'No hay resultados'}
      />
    </>
  );
}
