import Home from './Home/Home'
// import OfertaAcademica from './Oferta Academica/OfertaAcademica'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <html>
    {/* // <BrowserRouter> */}
      <Navbar/>
      <Home/>
    {/* //   <Routes>
        {/* <OfertaAcademica/> */}
        <Footer/>
    {/* //   </Routes> */}
    {/* // </BrowserRouter> */}
    </html>
  );
}
export default App;
