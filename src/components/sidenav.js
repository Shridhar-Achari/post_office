import React from "react";
//import { Link } from "react-router-dom";
function Sidenav()
{
    return(
        <div className="App">
<div class="container-fluid">
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
</div>
</div>
 )
}
export default Sidenav;