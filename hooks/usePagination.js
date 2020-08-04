import { useState, useCallback } from 'react';
export function usePagination() {
  const limit = 8;
  const [offset, setOffset] = useState(0);
  const [current, setCurrent] = useState(1);

  const pageBefore = useCallback(() => {
    setOffset(offset - limit);
    setCurrent(current - 1);
  }, [offset, current]);

  const pageAfter = useCallback(() => {
    setOffset(offset + limit);
    setCurrent(current + 1);
  }, [offset, current]);

  return { limit, current, offset, pageAfter, pageBefore };
}
