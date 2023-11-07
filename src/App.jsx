// import Home from './Home/Home'
import OfertaAcademica from './Oferta Academica/OfertaAcademica'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <html>
    {/* // <BrowserRouter> */}
      <Navbar/>
    {/* //   <Routes>
    //     <Route exact path='/' element={<Home/>}/> */}
        <OfertaAcademica/>
        <Footer/>
    {/* //   </Routes> */}
    {/* // </BrowserRouter> */}

    </html>

  );
}
// COMENTO EL HOME PARA PODER VER LA PAGINA QUE ESTAMOS HACIENDO DESPUES HAY QUE USAR REACT ROUTER O OTRA COSA SI SE TE OCURRE
export default App;
