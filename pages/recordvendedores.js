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
import { MEJORES_VENDEDORES } from '../graphql/records';
import { Ring } from 'react-awesome-spinners';
import NotLogded from '../component/customs/NotLogged';

export default function RecordVendedores() {
  const { data, loading, error } = useQuery(MEJORES_VENDEDORES);

  const mejoresVendedores = data?.mejoresVendedores;
  const vendedorGrafica = [];

  if (loading) return <Ring />;
  if (error) return <NotLogded />;

  mejoresVendedores?.map((vendedor, index) => {
    vendedorGrafica[index] = {
      ...vendedor.vendedor[0],
      total: vendedor.total.toFixed(2),
    };
  });

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Mejores Vendedores</h1>

      <ResponsiveContainer width={'100%'} height={500}>
        <BarChart
          className="mt-10"
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
