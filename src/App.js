import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Details from './Components/Details/Details';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Home></Home> */}
     <Routes>
       <Route path='/'  element={<Home></Home>}></Route>
       {/* <Route path='/#about'  element={<About></About>}></Route> */}
       
       <Route path='/:id' element={<Details></Details>} ></Route>
       <Route path='/contact' element={<Contact></Contact>} ></Route>
       <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
       
     </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
