import Hero from './Hero/Hero'
import Staff from './Staff/Staff'
import Workshop from './Workshop/Workshop'
import Form from './Form/Form'
import './Home.css'
import SoftSkills from './SoftSkills/SoftSkills'

function Home() {
  return (
    <div className='homeContainer'>
      <Hero/>
      <Staff/> 
      <Workshop/>
      <SoftSkills/>
      <Form/>  
    </div>
  );
}

export default Home