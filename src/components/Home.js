import { Container } from 'react-bootstrap'
import { useContext } from 'react'

import SearchHeroe from './SearchHeroe'
import ThemeContext from './ThemeContext'

const Home = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container
      className={`vh-100 fluid ${theme.background} d-flex flex-column justify-content-center align-items-center border rounded border-3 p-5`}
    >
      <SearchHeroe />
    </Container>
  )
}

export default Home
