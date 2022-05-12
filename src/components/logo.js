import React from "react";
import Logo0 from '../assets/India_Post_Logo_With_Text.svg';
import Logo1 from '../assets/pngwing.com.png';

//import { Link } from "react-router-dom";
function Logo()
{
    return(
<div className="App">

<div class="container-fluid postlogo">
<div className="row">
    <div class="header-logo">
        <img class='img1' src={Logo0}  height='100px' width='400px'/>
        <img class='img3' src={Logo1}  height='100px' width='100px'/><br></br>
        <div id="mySidenav" class="sidenav">
    </div>
    </div> 
    </div>
    </div>
    </div>
    )
}
export default Logo;