import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import About from './components/about'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
