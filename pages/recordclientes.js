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
import { Ring } from 'react-awesome-spinners';
import NotLogded from '../component/customs/NotLogged';

export default function RecordVendedores() {
  const { data, loading, error } = useQuery(MEJORES_CLIENTES);

  const clienteGrafica = [];

  if (loading) return <Ring />;
  if (error) return <NotLogded />;

  data.mejoresClientes.map((cliente, index) => {
    clienteGrafica[index] = {
      ...cliente.cliente[0],
      total: cliente.total.toFixed(2),
    };
  });

  return (
    <Layout>
      <h1 className="text-center uppercase text-2xl text-gray-800 font-light">
        Mejores Clientes
      </h1>

      <ResponsiveContainer width={'99%'} height={550}>
        <BarChart
          className="mt-10 "
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
