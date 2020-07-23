import { useQuery } from '@apollo/client';
import { OBTENER_CATEGORIAS } from '../graphql/categorias';

export function useCategories() {
  const { data, loading, error } = useQuery(OBTENER_CATEGORIAS);
  const categorias = data?.obtenerCategorias;

  if (loading) return 'Cargando...';
  if (error) return `Error || ${error.message}`;

  return [categorias];
}
