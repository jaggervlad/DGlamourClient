import React, { useEffect } from 'react';
import Layout from '../component/customs/Layout';
import { useQuery } from '@apollo/client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { MEJORES_CLIENTES } from '../graphql/records';

export default function RecordVendedores() {
  const { data, loading, error, startPolling, stopPolling } = useQuery(
    MEJORES_CLIENTES
  );

  const mejoresClientes = data?.mejoresClientes;
  const clienteGrafica = [];
  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  if (loading) return 'Cargando..';
  if (error) return `Error || ${error.message}`;

  mejoresClientes?.map((cliente, index) => {
    clienteGrafica[index] = {
      ...cliente.cliente[0],
      total: cliente.total,
    };
  });

  return (
    <Layout>
      <h1 className="text-center uppercase text-2xl text-gray-800 font-light">
        Mejores Clientes
      </h1>

      <ResponsiveContainer width={'99%'} height={550}>
        <BarChart
          className="mt-10 uppercase"
          width={600}
          height={500}
          data={clienteGrafica}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#3182CE" />
        </BarChart>
      </ResponsiveContainer>
    </Layout>
  );
}
