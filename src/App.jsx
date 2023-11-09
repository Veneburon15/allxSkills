import Home from './Home/Home'
// import OfertaAcademica from './Oferta Academica/OfertaAcademica'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
// import Curso from './Oferta Academica/Curso/Curso';

function App() {
  return (
    <main>
    {/* // <BrowserRouter> */}
      <Navbar/>
      <Home/>
    {/* //   <Routes>
        {/* <OfertaAcademica/> */}
        {/* <Curso/> */}
        <Footer/>
    {/* //   </Routes> */}
    {/* // </BrowserRouter> */} 


    </main>

  );
}
// COMENTO EL HOME PARA PODER VER LA PAGINA QUE ESTAMOS HACIENDO DESPUES HAY QUE USAR REACT ROUTER O OTRA COSA SI SE TE OCURRE
export default App;
