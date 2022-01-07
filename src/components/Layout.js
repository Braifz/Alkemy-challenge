import { useContext } from 'react';

import ThemeContext from './ThemeContext'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  const { theme } = useContext(ThemeContext)
  
  return (
    <div
      className={`vh-100 ${theme.background} ${theme.color}`}
    >
      <Header />
        {children}
      <Footer/>
    </div>
  )
}

export default Layout;