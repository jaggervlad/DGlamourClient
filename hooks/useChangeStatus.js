import { useState, useEffect } from 'react';
export function useChangeStatus(currentStatus) {
  const [status, setEstado] = useState(currentStatus);

  useEffect(() => {
    if (status) {
      setEstado(status);
    }
  }, [status]);

  return { setEstado, status };
}
