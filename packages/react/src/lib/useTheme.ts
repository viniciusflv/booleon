import { useState, useCallback, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return { theme, toggleTheme };
}
