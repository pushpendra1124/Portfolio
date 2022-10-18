// import { Nav } from 'react-bootstrap';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Technologies from './Pages/Technologies';
import Nav from './Pages/Nav';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div >
    <BrowserRouter>
    <span className='front'><Link style={{color:"brown",textDecoration:"none"}} to="Home">Pushpendra Singh</Link></span>

    <Nav/>
    <Routes>
    <Route path='/*' element={<Home/>}/>
    <Route path='/Projects' element={<Projects/>}/>
    <Route path='/Technologies' element={<Technologies/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/About' element={<About/>}/>
      
    </Routes>
    
      <h1 className='welcome'>Welcome To Portfolio</h1>
    </BrowserRouter>
    <h1 className='about3'>Design and code by Pushpendra Singh</h1>
      
    </div>
  );
}

export default App;

