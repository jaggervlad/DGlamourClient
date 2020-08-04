import { gql } from '@apollo/client';

export const OBTENER_PRODUCTO = gql`
  query obtenerProducto($id: ID!) {
    obtenerProducto(id: $id) {
      nombre
      existencia
      precio
      marca
      undMed
      presentacion
      categoria {
        id
        nombre
      }
    }
  }
`;

export const OBTENER_PRODUCTOS = gql`
  query obtenerProductos {
    obtenerProductos {
      id
      nombre
      existencia
      precio
      marca
      undMed
      presentacion
      categoria {
        nombre
      }
    }
  }
`;

export const NUEVO_PRODUCTO = gql`
  mutation nuevoProducto($input: ProductoInput!) {
    nuevoProducto(input: $input) {
      id
    }
  }
`;

export const ACTUALIZAR_PRODUCTO = gql`
  mutation actualizarProducto($id: ID!, $input: ProductoInput) {
    actualizarProducto(id: $id, input: $input) {
      id
      nombre
      precio
      existencia
    }
  }
`;

export const ELIMINAR_PRODUCTO = gql`
  mutation eliminarProducto($id: ID!) {
    eliminarProducto(id: $id)
  }
`;
