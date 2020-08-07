import { useRouter } from 'next/router';
import Layout from '../../component/customs/Layout';
import { TitleNew } from '../../component/customs/TitleNew';
import { useQuery } from '@apollo/client';
import { OBTENER_PEDIDO } from '../../graphql/pedidos';
import { Ring } from 'react-awesome-spinners';
import NotLogded from '../../component/customs/NotLogged';
import { EditForm } from './EditForm';

export default function EditarPedido() {
  let pedido;
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQuery(OBTENER_PEDIDO, {
    variables: { id },
  });

  if (loading) return <Ring />;
  if (error) return <NotLogded />;
  if (data) pedido = data.obtenerPedido;

  return (
    <Layout>
      <TitleNew title={`editar producto`} />
      <div className="flex justify-center mt-5">
        <EditForm pedido={pedido} id={id} />
      </div>
    </Layout>
  );
}
