import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import Logo from './components/logo';
import NPS from './components/nps';
import Menu1 from './components/menu';
import NavBar from './components/navbar';
import NavBar2 from './components/navbar2';
import SignUp from './components/signup';
import Contact from './components/contact';
import Stamp1 from './components/stamps';
import About3 from './components/about';
import Insurance1 from './components/insurance';
import Testimonial1 from "./components/testimonial";
import RegDetail from './components/registrationlist';
import NPSFORM from './components/npsform';
import Footer from './components/footer';
import Business from "./components/business";
import './App.css';
function App() {
return (
  
  <div className="App">
    <NavBar/>
    <Logo/>
    <NavBar2/>
  <header className="App-header">
   <div>
      <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} /> 
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About3 />} />
          <Route path="home" element={<Home />} />
          <Route path="insurance" element={<Insurance1 />} />
          <Route path="stamp" element={<Stamp1 />} />
          <Route path="nps" element={<NPS/>} />
          <Route path="menu" element={<Menu1/>} />
          <Route path="test" element={<Testimonial1 />} />
          <Route path="regdetail" element={<RegDetail />} />
          <Route path="npsf" element={<NPSFORM />} />
          <Route path="business" element={<Business />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </header>
  <Footer/>
  </div>
);
}

export default App;
