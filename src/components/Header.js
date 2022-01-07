import { Container } from 'react-bootstrap'

import ThemedButton from './ThemedButton'

const Header = () => {
    return (
        <div>

        <Container className="d-flex justify-content-between mw-100 bg-secondary text-center shadow h-auto">
            <h1 className="p-3 fw-bold font-monospace text-light">SuperHero App</h1>
            <ThemedButton/>
        </Container>
        </div>
    )
}

export default Header;