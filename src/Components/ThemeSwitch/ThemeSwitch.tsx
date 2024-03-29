import { useCallback, useEffect, useState } from 'react';

import * as styles from './ThemeSwitch.module.css';

import { useTheme } from '../../Theme/useTheme';

export function ThemeSwitch() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useTheme(theme);

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const getTheme = window.matchMedia('(prefers-color-scheme: dark)');

  getTheme.onchange = (darkTheme) => {
    if (localStorage.getItem('theme') === null)
      if (darkTheme.matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') !== null) {
      localStorage.getItem('theme') === 'dark'
        ? setTheme('dark')
        : setTheme('light');
    }
  }, [setTheme]);

  return <button onClick={toggleTheme} className={styles.switch}></button>;
}
