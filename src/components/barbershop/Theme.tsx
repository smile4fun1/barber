import { createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme: ThemeContextType = {
    colors: {
      primary: '#4A2C2A',    // Rich brown
      secondary: '#1E3A5F',  // Deep blue
      accent: '#D4AF37',     // Gold
      background: '#F5F5F5', // Light gray
      text: '#333333',       // Dark gray
    },
    fonts: {
      heading: '"Playfair Display", serif',
      body: '"Lato", sans-serif',
    },
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
