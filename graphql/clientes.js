import { gql } from '@apollo/client';

export const NUEVO_CLIENTE = gql`
  mutation nuevoCliente($input: ClienteInput!) {
    nuevoCliente(input: $input) {
      id
    }
  }
`;

export const ELIMINAR_CLIENTE = gql`
  mutation eliminarCliente($id: ID!) {
    eliminarCliente(id: $id)
  }
`;

export const ACTUALIZAR_CLIENTE = gql`
  mutation actualizarCliente($id: ID!, $input: ClienteInput!) {
    actualizarCliente(id: $id, input: $input) {
      id
      cedula
      nombre
      mail
      telefono
      direccion
      ciudad
    }
  }
`;

export const OBTENER_CLIENTE = gql`
  query obtenerCliente($id: ID!) {
    obtenerCliente(id: $id) {
      id
      cedula
      nombre
      mail
      telefono
      direccion
      ciudad
    }
  }
`;

export const OBTENER_CLIENTES = gql`
  query obtenerClientes {
    obtenerClientes {
      id
      cedula
      nombre
      mail
      telefono
      direccion
      ciudad
    }
  }
`;
