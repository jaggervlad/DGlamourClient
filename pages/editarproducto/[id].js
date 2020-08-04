import Layout from '../../component/customs/Layout';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { validationSchema } from '../../schemas/productos';
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import { OBTENER_PRODUCTO, ACTUALIZAR_PRODUCTO } from '../../graphql/productos';
import { useCategories } from '../../hooks/useCategories';
import { TitleNew } from '../../component/customs/TitleNew';

export default function EditarProducto() {
  const router = useRouter();
  const id = router.query.id;
  const { data, loading, error } = useQuery(OBTENER_PRODUCTO, {
    variables: { id },
  });
  const obtenerProducto = data?.obtenerProducto;
  const [actualizarProducto] = useMutation(ACTUALIZAR_PRODUCTO);
  const {
    categorias,
    loading: categoriasLoading,
    error: categoriasError,
  } = useCategories();

  if (loading || categoriasLoading) return 'Cargando...';
  if (error || categoriasError) return `Error || ${error.message}`;

  return (
    <Layout>
      <TitleNew title={`editar producto`} />

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <Formik
            enableReinitialize
            initialValues={obtenerProducto}
            validationSchema={validationSchema}
            onSubmit={async (values, helpers) => {
              const { nombre, existencia, precio } = values;
              try {
                const input = { nombre, existencia, precio };
                await actualizarProducto({
                  variables: { id, input },
                });
                helpers.setSubmitting(false);
                router.push('/productos');
                Swal.fire(
                  'Correcto',
                  'El producto se actualió correctamente',
                  'success'
                );
              } catch (error) {
                const errorMessage = error.message.replace(
                  'Graphql error: ',
                  ''
                );
                Swal.fire('Error', errorMessage, 'error');
              }
            }}
          >
            {({
              values,
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              isSubmitting,
            }) => {
              return (
                <form
                  className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="codigo"
                    >
                      Codigo
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="nombre"
                      type="text"
                      placeholder="Nombre Producto"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.codigo}
                    />
                  </div>

                  {touched.codigo && errors.codigo ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{errors.codigo}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="nombre"
                    >
                      Nombre
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="nombre"
                      type="text"
                      placeholder="Nombre Producto"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nombre}
                    />
                  </div>

                  {touched.nombre && errors.nombre ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{errors.nombre}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="existencia"
                    >
                      Cantidad Disponible
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="existencia"
                      type="number"
                      placeholder="Cantidad Disponible"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.existencia}
                    />
                  </div>

                  {touched.existencia && errors.existencia ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{errors.existencia}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="precio"
                    >
                      Precio
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="precio"
                      type="number"
                      placeholder="Precio Producto"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.precio}
                    />
                  </div>

                  {touched.precio && errors.precio ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{errors.precio}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="marca"
                    >
                      Marca
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="marca"
                      type="text"
                      placeholder="Marca"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.marca}
                    />
                  </div>

                  {touched.marca && errors.marca ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{errors.marca}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="undMed"
                    >
                      Unidad de Medida
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="undMed"
                      type="text"
                      placeholder="Unidad de Medida"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.undMed}
                    />
                  </div>

                  {touched.undMed && errors.undMed ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{errors.undMed}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="presentacion"
                    >
                      Presentacion
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="presentacion"
                      type="text"
                      placeholder="Presentacion"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.presentacion}
                    />
                  </div>

                  {touched.presentacion && errors.presentacion ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{errors.presentacion}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="categoria"
                    >
                      Categoria
                    </label>

                    <select
                      name="categoria"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="categoria"
                      value={values.categoria}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {categorias.map((categoria) => (
                        <option
                          key={categoria.id}
                          value={categoria.id}
                          label={categoria.nombre}
                        />
                      ))}
                    </select>
                  </div>

                  {touched.categoria && errors.categoria ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p>{errors.categoria}</p>
                    </div>
                  ) : null}

                  <input
                    disabled={isSubmitting}
                    type="submit"
                    className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
                    value="Guardar Cambios"
                  />
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Layout>
  );
}
