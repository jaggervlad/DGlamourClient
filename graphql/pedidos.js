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
      estado
    }
  }
`;
export const ELIMINAR_PEDIDO = gql`
  mutation eliminarPedido($id: ID!) {
    eliminarPedido(id: $id)
  }
`;

export const OBTENER_PEDIDOS = gql`
  query obtenerPedidos {
    obtenerPedidos {
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
