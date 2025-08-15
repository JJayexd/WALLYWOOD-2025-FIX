import { Container } from './Components/Container/Container'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Footer } from './Components/Footer/Footer'
import { AppRouter } from './Components/AppRouter/AppRouter'
import './index.css'

function App() {
  return (
    <>
        <Header />
          <Main>
            <AppRouter />
          </Main>
        <Footer />
    </>
  )
}

export default App
