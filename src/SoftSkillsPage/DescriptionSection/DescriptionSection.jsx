import TopImage from '../../Assets/Imagenes/DescriptionSection-image1.jpg'
import CenterImage from '../../Assets/Imagenes/DescriptionSection-image2.jpg'
import BottomImage from '../../Assets/Imagenes/DescriptioSection-image3.jpg'
import './DescriptionSection.css'

const DescriptionSection = () => {
  return (
    <section className='descriptionSection'>
        <div className='topBanner'>
            <img src={TopImage} alt="Mujer con computadora" className='hiddenInPhone'/> 
            <div className='innerDiv potential'>
                <h3>Tu Potencial con Soft Skills</h3>
                <p>Descubre el poder de las Soft Skills, desde la comunicación <br className='hiddenInPhone'/> eficaz hasta la adaptabilidad en entornos cambiantes. <br/> En un mundo donde las habilidades técnicas ya no son <br className='hiddenInPhone'/> suficientes se valora el liderazgo, la empatía y el trabajo en <br className='hiddenInPhone'/> equipo  ¿Estás listo para dar un paso adelante?</p>
            </div>
        </div>
        <div className='centerBanner'>
            <div className='innerDiv focus'>
                <h3>Nuestro Enfoque</h3>
                <p><strong>Creemos que para el aprendizaje es primordial un <br className='hiddenInPhone'/> enfoque interactivo y empírico.</strong> Utilizamos ejercicios <br className='hiddenInPhone'/> prácticos, roleplay y actividades para asegurarnos que <br className='hiddenInPhone'/> nuestros estudiantes no solo aprendan, sino que <br className='hiddenInPhone'/> apliquen estas habilidades en situaciones reales.</p>
            </div>
            <img src={CenterImage} alt="HombreclassName='hiddenInPhone' con cafe" className='hiddenInPhone'/>
        </div>
        <div className='bottomBanner'>
            <img src={BottomImage} alt="Mujer con celular" className='hiddenInPhone'/> 
            <div className='innerDiv knowledge'>
                <h3>Conocimiento que Perdura</h3>
                <p>El aprendizaje interactivo no solo es efectivo, sino que <br className='hiddenInPhone'/> también garantiza le retención a largo plazo y la aplicación <br className='hiddenInPhone'/> práctica de las habilidades adquiridas. Únete a nosotros y <br className='hiddenInPhone'/> comienza a descubrir cómo nuestras soluciones pueden <br className='hiddenInPhone'/> transformar tu carrera y tu vida cotidiana</p>
            </div>
        </div>
    </section>
  )
}

export default DescriptionSection