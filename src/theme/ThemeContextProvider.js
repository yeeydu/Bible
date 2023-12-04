import { View, Text } from 'react-native'
import React, {useState} from 'react'

export default function ThemeContextProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

  return (
    <themeContextProvider value={{darkMode, toggleTheme}}>
      {children}
    </themeContextProvider>
  )
}