import Layout from '../component/customs/Layout';
import { Title } from '../component/customs/Title';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { gql, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';

const REPORTE_TOTAL = gql`
  mutation TotalVentas($day: Int, $month: Int, $year: Int) {
    totalDeVentas(day: $day, month: $month, year: $year) {
      total
      pedidos {
        id
        total
        direccion
        pago
      }
    }
  }
`;

export default function Reports() {
  const [startDate, setStartDate] = useState(new Date());
  const [totalVentas, { data }] = useMutation(REPORTE_TOTAL);
  const [total, setTotal] = useState(0);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    if (data) {
      setPedidos(data.totalDeVentas.pedidos);
      setTotal(data.totalDeVentas.total);
    }
  }, [data]);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const day = startDate.getDate();
      const month = startDate.getMonth();
      const year = startDate.getFullYear();

      await totalVentas({ variables: { day, month, year } });
    } catch (error) {
      Swal.fire('Error', error.message.replace('GraphQL error: ', ''), 'error');
    }
  };

  return (
    <Layout>
      <Title title="Reportes de Ventas" />

      <div className="flex w-1/2 items-center">
        <DatePicker
          className="flex-grow rounded m-2 p-2 text-center bg-blue-800 text-white h-10"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
        />

        <button
          onClick={handleClick}
          className="h-10 bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white  p-2 border border-blue-500 hover:border-transparent rounded"
        >
          Generar
        </button>
      </div>
    </Layout>
  );
}
