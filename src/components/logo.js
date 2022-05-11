import React from "react";
import Logo0 from '../assets/India_Post_Logo_With_Text.svg';
import Logo1 from '../assets/pngwing.com.png';

//import { Link } from "react-router-dom";
function Logo()
{
    return(
<div className="App">
<div class="postlogo container-fluid">
    <div class="header-logo">
        <img class='img1' src={Logo0}  height='100px' width='400px'/>
        <img class='img3' src={Logo1}  height='100px' width='100px'/>
        <div id="mySidenav" class="sidenav">
    {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a> */}
    </div>
    </div> 
    </div>
    </div>
    )
}
export default Logo;