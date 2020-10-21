import { gql } from '@apollo/client';

export const NUEVO_PEDIDO = gql`
  mutation nuevoPedido($input: PedidoInput!) {
    nuevoPedido(input: $input) {
      id
    }
  }
`;

export const ACTUALIZAR_PEDIDO = gql`
  mutation actualizarPedido($id: ID!, $input: PedidoInput) {
    actualizarPedido(id: $id, input: $input) {
      id
      estado
      pago
      descripcion
    }
  }
`;
export const ELIMINAR_PEDIDO = gql`
  mutation eliminarPedido($id: ID!) {
    eliminarPedido(id: $id)
  }
`;

export const PEDIDOS_PAGADOS = gql`
  query pedidosPagados($offset: Int) {
    pedidosPagados(offset: $offset) {
      id
      cliente {
        id
        nombre
      }
      direccion
      total
      estado
    }
  }
`;

export const PEDIDOS_DESPACHADOS = gql`
  query pedidosDespachados($offset: Int) {
    pedidosDespachados(offset: $offset) {
      id
      cliente {
        id
        nombre
      }
      direccion
      total
      estado
    }
  }
`;
export const OBTENER_PEDIDOS = gql`
  query obtenerPedidos($offset: Int) {
    obtenerPedidos(offset: $offset) {
      id
      pedido {
        id
        cantidad
        nombre
        precio
      }
      cliente {
        id
        nombre
        mail
        telefono
      }
      vendedor {
        id
        nombre
      }
      total
      estado
      direccion
      pago
      descripcion
      costEnv
    }
  }
`;

export const OBTENER_PEDIDO = gql`
  query obtenerPedido($id: ID!) {
    obtenerPedido(id: $id) {
      id
      pedido {
        id
        cantidad
        nombre
        precio
      }
      cliente {
        id
        nombre
        mail
        telefono
      }
      vendedor {
        id
        nombre
      }
      total
      estado
      direccion
      pago
      descripcion
      costEnv
    }
  }
`;

export const OBTENER_PEDIDOS_SINGLE = gql`
  query obtenerPedidos {
    obtenerPedidos {
      id
    }
  }
`;
