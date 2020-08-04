import { createContext, useMemo } from 'react';
import { OBTENER_USUARIO } from '../../graphql/usuarios';
import { useQuery } from '@apollo/client';
import { Ring } from 'react-awesome-spinners';
import NotLogged from '../../component/customs/NotLogged';

export const UsuarioContext = createContext({});

export default function UsuarioContextProvider({ children }) {
  const { data, loading, error } = useQuery(OBTENER_USUARIO);
  const usuario = data?.obtenerUsuario;
  const value = useMemo(() => ({ usuario }), [usuario]);

  if (loading) return <Ring />;
  if (error) return <NotLogged />;

  return (
    <UsuarioContext.Provider value={{ value }}>
      {children}
    </UsuarioContext.Provider>
  );
}
