import { Link } from 'react-router-dom'
import Hero from './Hero/Hero'
import Staff from './Staff/Staff'
import Workshop from './Workshop/Workshop'
import Form from './Form/Form'
import './Home.css'
import SoftSkills from './SoftSkills/SoftSkills'
import Newsletter from './Upgrade/Newsletter' 
import Cursos from '../async'
import WhatsAppButton from './WhatsappButton/WhatsappButton'


function Home() { 
  const cursosContainer = []
  for (let i = 0; i < 3; i++) {
      const curso = Cursos[i];
      cursosContainer.push(<Workshop key={curso.id} curso={curso} />);
    }

  return (
    <main className='homeBody'>
      <Hero/>
      <Staff/> 
      <h2 className='workshopH2'>Elige tu siguiente curso</h2>
      <div className="cursosContainer homeContainerWork">
        {cursosContainer}
      </div>
      <Link to='/ofertaAcademica'>
        <button className='violetButton'>Más cursos</button>
      </Link>
      <Newsletter/>
      <SoftSkills/>
      <WhatsAppButton/>
      <Form/>  
    </main>
  );
}

export default Home