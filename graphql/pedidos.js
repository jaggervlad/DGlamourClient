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
  query pedidosPagados {
    pedidosPagados {
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

export const PEDIDOS_PENDIENTES = gql`
  query pedidosPendientes {
    pedidosPendientes {
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
  query obtenerPedidos($offset: Int, $limit: Int) {
    obtenerPedidos(offset: $offset, limit: $limit) {
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

    totalPedidos
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
