import Hero from './Hero/Hero'
import Staff from './Staff/Staff'
import Workshop from './Workshop/Workshop'
import Form from './Form/Form'
import './Home.css'
import SoftSkills from './SoftSkills/SoftSkills'

function Home() {
  return (
    <main className='homeContainer'>
      <Hero/>
      <Staff/> 
      <h2>Elige tu siguiente curso</h2>
      <Workshop/>
      <SoftSkills/>
      <Form/>  
    </main>
  );
}

export default Home