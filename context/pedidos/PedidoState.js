import React, { useReducer } from 'react';
import PedidoContext from './PedidoContex';
import PedidoReducer from './PedidoReducer';

import {
  ACTUALIZAR_TOTAL,
  CANTIDAD_PRODUCTOS,
  SELECCIONAR_CLIENTE,
  SELECCIONAR_PRODUCTO,
  RESET,
} from '../../types';

export const initialState = {
  cliente: {},
  productos: [],
  total: 0,
};
const PedidoState = ({ children }) => {
  const [state, dispatch] = useReducer(PedidoReducer, initialState);

  const agregarCliente = (cliente) => {
    dispatch({
      type: SELECCIONAR_CLIENTE,
      payload: cliente,
    });
  };

  const agregarProducto = (productosSeleccionados) => {
    let nuevoState;
    if (state.productos.length > 0) {
      nuevoState = productosSeleccionados.map((producto) => {
        const nuevoObjeto = state.productos.find(
          (productoState) => productoState.id === producto.id
        );
        return { ...producto, ...nuevoObjeto };
      });
    } else {
      nuevoState = productosSeleccionados;
    }

    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: nuevoState,
    });
  };

  const cantidadProductos = (nuevoProducto) => {
    dispatch({
      type: CANTIDAD_PRODUCTOS,
      payload: nuevoProducto,
    });
  };

  const actualizarTotal = () => {
    dispatch({
      type: ACTUALIZAR_TOTAL,
    });
  };

  const resetPedidoReducer = () => {
    dispatch({
      type: RESET,
    });
  };

  return (
    <PedidoContext.Provider
      value={{
        cliente: state.cliente,
        productos: state.productos,
        total: state.total,
        costEnv: state.costEnv,
        agregarCliente,
        agregarProducto,
        cantidadProductos,
        actualizarTotal,
        reset: resetPedidoReducer,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
