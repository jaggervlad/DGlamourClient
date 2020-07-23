import React, { useEffect } from 'react';
import Layout from '../component/Layout';
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
import { MEJORES_VENDEDORES } from '../graphql/records';

export default function RecordVendedores() {
  const { data, loading, error, startPolling, stopPolling } = useQuery(
    MEJORES_VENDEDORES
  );

  const mejoresVendedores = data?.mejoresVendedores;
  const vendedorGrafica = [];
  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  if (loading) return 'Cargando..';
  if (error) return `Error || ${error.message}`;

  mejoresVendedores?.map((vendedor, index) => {
    vendedorGrafica[index] = {
      ...vendedor.vendedor[0],
      total: vendedor.total,
    };
  });

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Mejores Vendedores</h1>

      <ResponsiveContainer width={'99%'} height={550}>
        <BarChart
          className="mt-10"
          width={600}
          height={500}
          data={vendedorGrafica}
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
