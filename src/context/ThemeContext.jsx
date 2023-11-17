'use client'
import { createContext, useEffect, useState } from 'react'

// ! used for change themeMood dark and light
export const ThemeContext = createContext()

const getFormLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const velue = localStorage.getItem('theme')
    return velue || 'light'
  }
}

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFormLocalStorage()
  })

  // ?? Theme Toggle Function
  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}{' '}
    </ThemeContext.Provider>
  )
}
