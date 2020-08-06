import {
  SELECCIONAR_CLIENTE,
  SELECCIONAR_PRODUCTO,
  CANTIDAD_PRODUCTOS,
  ACTUALIZAR_TOTAL,
} from '../../types';

export default function Reducer(state, action) {
  switch (action.type) {
    case SELECCIONAR_CLIENTE:
      return {
        ...state,
        cliente: action.payload,
      };

    case SELECCIONAR_PRODUCTO:
      return {
        ...state,
        productos: action.payload,
      };

    case CANTIDAD_PRODUCTOS:
      return {
        ...state,
        productos: state.productos.map((product) =>
          product.id === action.payload.id
            ? (product = action.payload)
            : product
        ),
      };

    case ACTUALIZAR_TOTAL:
      return {
        ...state,
        total: state.productos.reduce(
          (nuevoTotal, articulo) =>
            (nuevoTotal += articulo.precio * articulo.cantidad),
          0
        ),
      };

    default:
      return state;
  }
}
