import { useContext } from 'react'
import ThemeContext from './ThemeContext'

const ThemedButton = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={handleChangeTheme}
      className={`btn m-3 rounded-circle ${theme.button}`}
    >
      Theme
    </button>
  )
}

export default ThemedButton
