import React from "react";
import { Link } from "react-router-dom";
import Epay from '../jsondata/e-payment.json'
function Business()
{
    return(
<div className="App">
<div class="container-fluid">
    <div class="header-logo">
        <div class="container">
        <h4 align="center">E-Payment</h4> 
        <h5>Present rate for e-payment</h5> 
       
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Amount</th> 
                <th>Rate</th>  
              </tr> 
              {Epay.map((record, i) =>
                <tr key={i}>
                  <td>{record.amt}</td>
                  <td>{record.rate}</td>
              </tr>)}
            </thead>
            </table> 
            <button className="App-link">
          <a href="https://rzp.io/i/OdeFOjlVVR">Click Here to Pay</a>
        </button><br></br>     
    </div> 
    </div>
    </div>
    </div>
    )
}
export default Business;