// THIS IS HOW YOU CAN IMPORT IMAGES
// import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Main from './components/Main';
import Elements from './components/Elements';
import Images from './components/Images';
import ContactForm from './components/form';
import './styles/App.css'

function App() {
  return (
    <>
      <Header />
      
      <main>
        <section className="centered-section">
          <Main />
        </section>

        <section className="carousel-section">
          <Carousel />
        </section>

        <section className="elements-section">
          <Elements />
        </section>

        <section className='images-section'>
          <Images />
        </section>

        <section className='form-section' id='form'>
          <ContactForm />
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default App
