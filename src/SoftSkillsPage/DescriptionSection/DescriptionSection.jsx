import TopImage from '../../Assets/Imagenes/DescriptionSection-image1.jpg'
import CenterImage from '../../Assets/Imagenes/DescriptionSection-image2.jpg'
import BottomImage from '../../Assets/Imagenes/DescriptioSection-image3.jpg'
import './DescriptionSection.css'

const DescriptionSection = () => {
  return (
    <section className='descriptionSection'>
        <div className='topBanner'>
            <img src={TopImage} alt="Mujer con computadora" /> 
            <div className='innerDiv potential'>
                <h3>Tu Potencial con Soft Skills</h3>
                <p>Descubre el poder de las Soft Skills, desde la comunicación <br /> eficaz hasta la adaptabilidad en entornos cambiantes. <br /> En un mundo donde las habilidades técnicas ya no son <br /> suficientes se valora el liderazgo, la empatía y el trabajo en equipo ¿Estás listo para dar un paso adelante?</p>
            </div>
        </div>
        <div className='centerBanner'>
            <div className='innerDiv focus'>
                <h3>Nuestro Enfoque</h3>
                <p>Creemos que para el aprendizaje es primordial un <br /> enfoque interactivo y empírico. Utilizamos ejercicios <br /> prácticos, roleplay y actividades para asegurarnos que <br /> nuestros estudiantes no solo aprendan, sino que <br /> apliquen estas habilidades en situaciones reales.</p>
            </div>
            <img src={CenterImage} alt="Hombre con cafe" />
        </div>
        <div className='bottomBanner'>
            <img src={BottomImage} alt="Mujer con celular" /> 
            <div className='innerDiv knowledge'>
                <h3>Conocimientos que Perduran</h3>
                <p>El aprendizaje interactivo no solo es efectivo, sino que <br /> también garantiza le retención a largo plazo y la aplicación <br /> práctica de las habilidades adquiridas. Únete a nosotros y <br /> comienza a descubrir cómo nuestras soluciones pueden <br /> transformar tu carrera y tu vida cotidiana</p>
            </div>
        </div>
    </section>
  )
}

export default DescriptionSection