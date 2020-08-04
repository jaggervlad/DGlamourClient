import { useContext } from 'react';
import { UsuarioContext } from '../context/usuarios/UsuarioContext';

export default function useAuth() {
  const { value: usuario } = useContext(UsuarioContext);
  const isLogged = usuario ? true : false;
  return {
    usuario,
    isLogged,
  };
}
