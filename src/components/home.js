import React, { Component } from "react";
import Carousel1 from './carousel';
//import Navbar2 from "./navbar2";
import Contact from './contact';
import About1 from './about';
import Footer from './footer';
class Home extends Component {
    render() {
      return (
        <div className="App"> 
            <Carousel1/>
           {/* <Navbar2/> */}
            <Contact/>
            <About1/>
            {/* <Footer/> */}
            </div>
    )
}
}
export default Home;

