import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'custom';
type ThemeColors = {
  primary: string;
  secondary: string;
  tertiary: string;
};

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  customColors: ThemeColors;
  setCustomColors: (colors: ThemeColors) => void;
}

const defaultCustomColors: ThemeColors = {
  primary: '#4f46e5',
  secondary: '#7c3aed',
  tertiary: '#06b6d4',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [customColors, setCustomColors] = useState<ThemeColors>(defaultCustomColors);

  useEffect(() => {
    const root = document.documentElement;
    const colors = theme === 'light' 
      ? {
          primary: '#4f46e5',
          secondary: '#7c3aed',
          tertiary: '#06b6d4',
        }
      : theme === 'dark'
      ? {
          primary: '#312e81',
          secondary: '#4c1d95',
          tertiary: '#0e7490',
        }
      : customColors;

    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-tertiary', colors.tertiary);
  }, [theme, customColors]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, customColors, setCustomColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}