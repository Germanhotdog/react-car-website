import './App.css';
import Navi from './component/Navi';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './component/pages/Home';
import Aboutus from './component/pages/Aboutus';
import Footer from './component/Footer';
import Carpage from './component/pages/Carpage';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navi />
      <Routes >
      <Route path='/' exact element={ <Home />}></Route>
      <Route path='/pages/Aboutus' exact element={ <Aboutus />}></Route>
      <Route path='/pages/Carpage' exact element={ <Carpage />}></Route>
      </Routes >
      
      
    </BrowserRouter>
    
    
    </>

    
    
    
  )
}

export default App;
