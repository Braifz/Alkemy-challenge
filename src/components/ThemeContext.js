import { createContext } from 'react'

export const themes = {
  light: {
    background: 'bg-light',
    color: 'text-dark',
    button: 'btn-light'
  },
  dark: {
    background: 'bg-dark',
    color: 'text-white',
    button: 'btn-dark'
  }
}

const ThemeContext = createContext()

export default ThemeContext