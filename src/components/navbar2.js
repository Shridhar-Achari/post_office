import React from "react";
import { Link } from "react-router-dom";

function Navbars()
{
    return(
        <div className="App">
<div class="container-fluid"></div>
    <div class="pos-f-t">
    <nav class="navbar navbar-inverse bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
    <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-light p-4">
        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Services <span class="caret"></span></a>  
            <ul class="dropdown-menu">  
                <li><Link to='insurance'>Insurance</Link></li> 
                <li class="dropdown">
          <div class="dropdown-toggle" data-toggle="dropdown" href="#">Types<span class="caret"></span></div>
          <ul class="dropdown-menu">
            <li><Link to='' >Page 1-1</Link></li>
            <li><Link to='' >Page 1-2</Link></li>
            <li><Link to=''>Page 1-3</Link></li>
          </ul>
        </li>
                <li><Link to='nps'>NPS</Link></li>
                <li><Link to='stamp'>Stamps</Link></li>  
                <li><Link to='business'>Business and E-Commerce</Link></li>  
            </ul>  
            </li> 
        </div>
    </div>
    
    </div>
    </div>
    )
}
export default Navbars;