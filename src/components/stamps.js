import React from "react";
//import { Link } from "react-router-dom";
import Stamps from '../jsondata/stamps.json';
function Stamp()
{
    return(
<div className="App">
<div class="container-fluid">
<div class="header-logo"> 
 <div className="App-link">
  <div class="items">
    {Stamps.map((record, i) =>
          <div key={i}> 
      <img class='stampimg' src={record.img} alt="img1"/>
      <h2>Name: {record.title}</h2><br></br>
      <p>Price: {record.price}</p><br></br>
          <button class="cartbtn"><a href="https://rzp.io/i/SgSMz2E">BUY Stamp</a></button><br></br>
      </div>)}
      </div>
      </div>
    </div> 
    </div>
    </div>
    )
}
export default Stamp;