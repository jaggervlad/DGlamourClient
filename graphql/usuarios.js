import { gql } from '@apollo/client';

export const AUTENTICAR_USUARIO = gql`
  mutation autenticarUsuario($input: AutenticarInput) {
    autenticarUsuario(input: $input) {
      token
    }
  }
`;

export const CERRRAR_SESION = gql`
  mutation logout {
    logout
  }
`;

export const NUEVA_CUENTA = gql`
  mutation nuevoUsuario($input: UsuarioInput) {
    nuevoUsuario(input: $input) {
      id
      nombre
      username
      rol
    }
  }
`;

export const OBTENER_USUARIO = gql`
  query obtenerUsuario {
    obtenerUsuario {
      id
      nombre
      username
      rol
    }
  }
`;
