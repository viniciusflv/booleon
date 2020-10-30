import { useMemo } from 'react';

export function useFastHash(str: string) {
  return useMemo(() => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash;
  }, [str]);
}