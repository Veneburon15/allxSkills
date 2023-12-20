import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home'
import OfertaAcademica from './Oferta Academica/OfertaAcademica'
// import Curso from './Oferta Academica/Curso/Curso'; 
import Contactanos from './Contactanos/Contactanos'; 
import SoftSkillsPage from './SoftSkillsPage/SoftSkillsPage'; 
import Curso from './Oferta Academica/Curso/Curso';
import SobreNosotros from './SobreNosotrosPage/SobreNostros';



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
        {/* <Route path="/ofertaAcademica/AllCourses" element={</>}/> */}
        {/* <Route path="/ofertaAcademica/InteligenciaEmocional" element={</>}/> */}
        {/* <Route path="/ofertaAcademica/HabilidadesInterpersonales" element={</>}/> */}
        <Route path='/sobreNosotros' element={<SobreNosotros/>}/>
        <Route path='/softSkills' element={<SoftSkillsPage/>} />
        <Route path='/contactanos' element={<Contactanos/>}/>
        <Route path='*' element={<h2>Página en construcción</h2>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
