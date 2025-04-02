import '../styles/Elements.css'
import laptop from '/Laptop.gif'
import hospital from '/hospital_icon.png'
import person from '/personas.png'

function Elements() {
  return (
    <>
      <h3 className='subtitle'>Propuesta de valor</h3>
      <div className='card-container'>
        <div className='card'>
          <img src={person} alt="Imagen no encontrada" className='image'/>
          <h3>Soporte Emocional</h3>
          <p>Comparte tus inquietudes y celebra tus victorias en un entorno de solidaridad y comprensión.</p>
        </div>

        <div className='card'>
          <img src={laptop} alt="Imagen no encontrada" className='image'/>
          <h3>Comunidad Empática</h3>
          <p className='lap-p'>Conecta con personas que entienden lo que estás viviendo.</p>
        </div>

        <div className='card'>
          <img src={hospital} alt="Imagen no encontrada" className='image'/>
          <h3>Información Confiable</h3>
          <p>Accede a recursos actualizados y recomendaciones de profesionales de la salud.</p>
        </div>
      </div>
    </>
  )
}

export default Elements