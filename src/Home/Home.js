import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Hero from './Hero/Hero'
import Staff from './Staff/Staff'
import Workshop from './Workshop/Workshop'
import Form from './Form/Form'
function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Staff/> 
      <Workshop/>
      <Form/>  
      <Footer/>  
    </div>
  );
}

export default Home