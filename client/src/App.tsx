import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <>
    <header>
      <nav>
        <Navbar />
      </nav>
    </header>
    <main>
      <Intro />
      <Portfolio />
    </main>
    <Contact />
    </>
  )
}

export default App
