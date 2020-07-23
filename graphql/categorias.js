import { gql } from '@apollo/client';

export const OBTENER_CATEGORIAS = gql`
  query obtenerCategorias {
    obtenerCategorias {
      id
      nombre
    }
  }
`;
export const OBTENER_CATEGORIA = gql`
  query obtenerCategoria($id: ID!) {
    obtenerCategoria(id: $id) {
      id
      nombre
    }
  }
`;
export const ELIMINAR_CATEGORIA = gql`
  mutation eliminarCategoria($id: ID!) {
    eliminarCategoria(id: $id)
  }
`;

export const NUEVA_CATEGORIA = gql`
  mutation nuevaCategoria($input: CategoriaInput!) {
    nuevaCategoria(input: $input) {
      id
      nombre
    }
  }
`;

export const ACTUALIZAR_CATEGORIA = gql`
  mutation actualizarCategoria($id: ID!, $input: CategoriaInput!) {
    actualizarCategoria(id: $id, input: $input) {
      id
      nombre
    }
  }
`;
