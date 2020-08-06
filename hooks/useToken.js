import { useState } from 'react';

export function useToken() {
  const [token, setToken] = useState('');

  return { token, setToken };
}
