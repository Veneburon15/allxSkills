import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Function_components/ScrollToTop/ScrollToTop';
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home'
import OfertaAcademica from './Oferta Academica/OfertaAcademica'
import Contactanos from './Contactanos/Contactanos'; 
import SoftSkillsPage from './SoftSkillsPage/SoftSkillsPage'; 
import Curso from './Oferta Academica/Curso/Curso';
import SobreNosotros from './SobreNosotrosPage/SobreNostros';
import TerminosYCondiciones from './TerminosYCondiciones/TerminosYCondiciones';
import BotonArrepentimiento from './BotonArrepentimiento/BotonArrepentimiento';

function App() {
  return (
    <>
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ofertaAcademica" element={<OfertaAcademica />}/> 
        <Route path="/curso/:cursoId" element={<Curso />}/>
        <Route path='/sobreNosotros' element={<SobreNosotros/>}/>
        <Route path='/softSkills' element={<SoftSkillsPage/>} />
        <Route path='/contactanos' element={<Contactanos/>}/>
        <Route path='*' element={<h2>Página en construcción</h2>}/>
        <Route path='/terminosYCondiciones' element={<TerminosYCondiciones/>}/>
        <Route path='/botonArrepentimiento' element={<BotonArrepentimiento/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
