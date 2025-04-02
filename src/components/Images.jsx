import '../styles/Images.css'
import doctors from '/docs2.png'
import hands from '/team2.jpg'

function Images() {
  return (
    <>
      <div className='bar left'><p>Conecta con expertos y testimonios reales</p></div>
      <div className='img-container'>
        <img src={doctors} alt="Imagen no encontrada" className='img il'/>
        <img src={hands} alt="Imagen no encontrada" className='img ir'/>
      </div>
      <div className='bar right'><p>Juntos, somos más fuertes.</p></div>
    </>
  )
}

export default Images