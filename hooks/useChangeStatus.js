import { useState, useEffect } from 'react';
export function useChangeStatus(currentStatus) {
  const [status, setEstado] = useState(currentStatus);
  const [clase, setClase] = useState('');

  useEffect(() => {
    if (status) {
      setEstado(status);
    }
    clasePedido();
  }, [status]);

  const clasePedido = () => {
    if (status === 'PENDIENTE') {
      setClase('border-yellow-500');
    } else if (status === 'PAGADO') {
      setClase('border-green-500');
    } else {
      setClase('border-blue-800');
    }
  };

  return { setEstado, clase, status };
}
