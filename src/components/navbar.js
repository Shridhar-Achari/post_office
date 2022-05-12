import React from 'react';
import { Link } from "react-router-dom";
function NavComponent()
{
return (
    <div className="App">
         <nav class="navbar navbar-inverse navbar sticky-top" >  {/*navbar-fixed-top  */}
            <div class="container-fluid">  

                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <Link to='home' class="navbar-brand" >POST OFFICE</Link>
                </div>       
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">  
                        <li class="active"><Link to="home" a href="">Home</Link></li>  
                        <li class="dropdown"><Link to="about" href="">About-Us</Link></li>  
                        <li><Link to='contact' href="">Contact-Us</Link></li> 
                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="">Services <span class="caret"></span></a>  
                        <ul class="dropdown-menu">  
                            <li><Link to='insurance'>Insurance</Link></li> 
                            <li><Link to='nps'>NPS</Link></li>
                            <li><Link to='stamp'>Stamps</Link></li>  
                            <li><Link to='business'>Business and E-Commerce</Link></li>  
                            <li><Link to='test'>Testimonials</Link></li>  
                        </ul>  
                        </li> 
                    </ul> 
                    <ul class="nav navbar-nav navbar-right">  
                        <li><Link to="signup"><span class="glyphicon glyphicon-user"></span> Register</Link></li>  
                        <li><Link to="login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>  
                    </ul>   
                </div> 
            </div>  
        </nav>
    </div>
    )
}
export default NavComponent;