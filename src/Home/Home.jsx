import Hero from './Hero/Hero'
import Staff from './Staff/Staff'
import Workshop from './Workshop/Workshop'
import Form from './Form/Form'
import './Home.css'
import SoftSkills from './SoftSkills/SoftSkills'

function Home() {
  return (
    <body className='homeBody'>
      <Hero/>
      <Staff/> 
      <h2 className='workshopH2'>Elige tu siguiente curso</h2>
      <Workshop/>
      <button className='moreCourses'>Más cursos</button>
      <SoftSkills/>
      <Form/>  
    </body>
  );
}

export default Home