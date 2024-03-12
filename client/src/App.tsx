import './App.css'
import { Suspense, lazy } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
const Portfolio = lazy(() => import('./Components/Portfolio/Portfolio'))
const Contact = lazy(() => import('./Components/Contact/Contact'))

function App() {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}/>
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
