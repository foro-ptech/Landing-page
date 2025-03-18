import { useState } from 'react';
// THIS IS HOW YOU CAN IMPORT IMAGES
// import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      
      <main>
        <section className="centered-section">
          <h2>Bienvenido a nuestra página</h2>
          <p>Este es un texto de ejemplo centrado en la primera sección principal de nuestro sitio web.</p>
        </section>

        <section className="carousel-section">
          <Carousel />
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default App
