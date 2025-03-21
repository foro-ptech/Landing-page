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
          <h3>Titulo</h3>
          <p>Descripcion Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dicta quisquam, illum vero</p>
        </div>

        <div className='card'>
          <img src={laptop} alt="Imagen no encontrada" className='image'/>
          <h3>Titulo</h3>
          <p className='lap-p'>Descripcion Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dicta quisquam, illum vero</p>
        </div>

        <div className='card'>
          <img src={hospital} alt="Imagen no encontrada" className='image'/>
          <h3>Titulo</h3>
          <p>Descripcion Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dicta quisquam, illum vero</p>
        </div>
      </div>
    </>
  )
}

export default Elements