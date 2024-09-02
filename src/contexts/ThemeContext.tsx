import { createContext, useContext, useState } from 'react'

interface ThemeContextProviderProps {
  children: React.ReactNode
}

type themeType = 'light' | 'dark'

interface ThemeContextValue {
  theme: themeType
  toggleTheme: () => void
}

const DEFAULT_VALUE: ThemeContextValue = {
  theme: 'light',
  toggleTheme: () => null,
}
const ThemeContext = createContext<ThemeContextValue>(DEFAULT_VALUE)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<themeType>('light')

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
    document.body.classList.toggle('dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
