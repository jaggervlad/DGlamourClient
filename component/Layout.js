import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Sidebar from '../component/Sidebar';
import Header from './Header';
import UsuarioState from '../context/usuarios/UsuarioContex';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>CRM - Administracion de Clientes</title>
      </Head>
      {router.pathname === '/login' || router.pathname === '/registro' ? (
        <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
          <div>{children}</div>
        </div>
      ) : (
        <UsuarioState>
          <div className="bg-gray-200 min-h-screen">
            <div className="sm:flex min-h-screen">
              <Sidebar />

              <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
                <Header />
                {children}
              </main>
            </div>
          </div>
        </UsuarioState>
      )}
    </>
  );
}
