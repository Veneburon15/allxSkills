import Home from './Home/Home'
// import OfertaAcademica from './Oferta Academica/OfertaAcademica'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Curso from './Oferta Academica/Curso/Curso';

function App() {
  return (
    <html>
    {/* // <BrowserRouter> */}
      <Navbar/>
      <Home/>
    {/* //   <Routes>
<<<<<<< HEAD
    //     <Route exact path='/' element={<Home/>}/> */}
        {/* <OfertaAcademica/> */}
        <Curso/>
        <Footer/>
    {/* //   </Routes> */}
    {/* // </BrowserRouter> */} 


=======
        {/* <OfertaAcademica/> */}
        <Footer/>
    {/* //   </Routes> */}
    {/* // </BrowserRouter> */}
>>>>>>> 820bc20e8759885068a5e7a2bf9fdf9653a7b642
    </html>
  );
}
export default App;
