import { useCallback, useEffect, useState } from 'react';

function useDarkListener() {
  let isDark = false;
  let listener = (cb: (isDark: boolean) => void) => cb(false);
  try {
    const match = window?.matchMedia('(prefers-color-scheme: dark)');
    isDark = match?.matches;
    listener = (cb: (isDark: boolean) => void) =>
      match.addEventListener('change', ({ matches: isDark }) => cb(isDark));
  } catch (error) {
    // SSR
  }
  return [isDark, listener] as const;
}

export function useTheme() {
  const [isDark, darkListener] = useDarkListener();
  const preferedColorScheme = isDark ? 'dark' : 'light';
  const [theme, setTheme] = useState<string>(preferedColorScheme);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    darkListener((isDark) => setTheme(isDark ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return { theme, toggleTheme };
}
