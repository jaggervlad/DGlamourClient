import Layout from '../../component/customs/Layout';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { OBTENER_PRODUCTO } from '../../graphql/productos';
import { useCategories } from '../../hooks/useCategories';
import { TitleNew } from '../../component/customs/TitleNew';
import { EditForm } from '../../component/productos/EditForm';
import { Ring } from 'react-awesome-spinners';
import NotLogded from '../../component/customs/NotLogged';

export default function EditarProducto() {
  const router = useRouter();
  const id = router.query.id;
  const { data, loading, error } = useQuery(OBTENER_PRODUCTO, {
    variables: { id },
  });

  const {
    categorias,
    loading: categoriasLoading,
    error: categoriasError,
  } = useCategories();

  if (loading || categoriasLoading) return <Ring />;
  if (error || categoriasError) return <NotLogded />;
  const obtenerProducto = data?.obtenerProducto;
  return (
    <Layout>
      <TitleNew title={`editar producto`} />

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <EditForm
            producto={obtenerProducto}
            id={id}
            categorias={categorias}
          />
        </div>
      </div>
    </Layout>
  );
}
