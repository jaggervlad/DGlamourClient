import { gql } from '@apollo/client';

export const MEJORES_VENDEDORES = gql`
  query mejoresVendedores {
    mejoresVendedores {
      vendedor {
        nombre
      }
      total
    }
  }
`;

export const MEJORES_CLIENTES = gql`
  query mejoresClientes {
    mejoresClientes {
      cliente {
        nombre
        mail
      }
      total
    }
  }
`;
