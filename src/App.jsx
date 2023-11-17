import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home'
import OfertaAcademica from './Oferta Academica/OfertaAcademica'
// import Curso from './Oferta Academica/Curso/Curso';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ofertaAcademica" element={<OfertaAcademica />}/>
        {/* <Route path="/ofertaAcademica/AllCourses" element={</>}/> */}
        {/* <Route path="/ofertaAcademica/InteligenciaEmocional" element={</>}/> */}
        {/* <Route path="/ofertaAcademica/HabilidadesInterpersonales" element={</>}/> */}
        {/* <Route path='/sobreNosotros' element={</>}/> */}
        {/* <Route path='/softSkills' element={</>} /> */}
        {/* <Route path='/contactanos' element={</>}/> */}
        <Route path='*' element={<h2>Página en construcción</h2>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
