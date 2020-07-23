import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useApolloClient } from '@apollo/client';
import { CERRRAR_SESION } from '../graphql/usuarios';
import Swal from 'sweetalert2';

export default function CerrarSesion() {
  const client = useApolloClient();
  const router = useRouter();
  const [logout] = useMutation(CERRRAR_SESION);

  useEffect(() => {
    logout().then(() => {
      client.resetStore().then(() => {
        router.push('/login');
      });
    });
  }, [logout, router, client]);

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
      <div>Cerrando Sesion</div>
    </div>
  );
}
