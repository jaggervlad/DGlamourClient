import { createContext, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { OBTENER_USUARIO } from '../../graphql/usuarios';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

export const UsuarioContext = createContext({});

export default function UsuarioContextProvider({ children }) {
  const { data, loading, error } = useQuery(OBTENER_USUARIO);
  const usuario = data?.obtenerUsuario;
  const value = useMemo(() => ({ usuario }), [usuario]);

  if (loading) return 'Cargando...';
  if (error)
    return (
      <Link href="/login">
        <a> Inicia Sesion</a>
      </Link>
    );

  return (
    <UsuarioContext.Provider value={{ value }}>
      {children}
    </UsuarioContext.Provider>
  );
}
