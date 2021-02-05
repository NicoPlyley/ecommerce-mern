import {Container} from 'react-bootstrap'
import {Header, Footer} from './components'

const App = () => {
    return (
        <>
            <Header />
            <main className="py-3">
                <Container>
                    <h1>Welcome To MyShop</h1>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default App