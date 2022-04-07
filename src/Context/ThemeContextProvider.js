import React, { useState } from 'react'
import { createContext } from 'react'
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const ToggleMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <ThemeContext.Provider value={{ theme, ToggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;