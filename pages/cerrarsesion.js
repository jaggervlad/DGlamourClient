import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useApolloClient } from '@apollo/client';
import { CERRRAR_SESION } from '../graphql/usuarios';
import { Ring } from 'react-awesome-spinners';

export default function CerrarSesion() {
  const client = useApolloClient();
  const router = useRouter();
  const [logout] = useMutation(CERRRAR_SESION);

  useEffect(() => {
    const handleLogout = async () => {
      await logout();
      await client.resetStore();
      router.push('/login');
    };
    handleLogout();
  }, [logout, router, client]);

  return <Ring />;
}
