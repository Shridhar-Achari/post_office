import React from "react";
import NPSF from './npsform';
import Npsdetail from './registrationlist';
//import { Link } from "react-router-dom";
function NPS()
{
    return(
<div className="App">
<div class="container-fluid">
    <div class="header-logo">
      <div class="npshead">
        <h2>National Pension System - Online Services</h2>
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active"  id="about-nps" data-toggle="tab" href="#aboutnps" role="tab" aria-controls="anoutnps" aria-selected="true">About-NPS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Create Account</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Account Details</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="aboutnps" role="tabpanel" aria-labelledby="about-tab">
      <ul type='1'>
          <div class="npshead"><h3>National Pension System - All Citizen Model</h3></div>
          <li><p>National Pension System (NPS) is a voluntary retirement savings scheme laid out to allow the subscribers to make defined contribution towards planned savings thereby securing the future in the form of Pension. It is an attempt towards a sustainable solution to the problem of providing adequate retirement income to every citizen of India. At the time of normal exit from NPS, the subscribers may use the accumulated pension wealth under the scheme to purchase a life annuity from a PFRDA empaneled life insurance company apart from withdrawing a part of the accumulated pension wealth as lump-sum, if they choose so. PFRDA is the nodal agency for implementation and monitoring of NPS.</p></li>
      </ul>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <NPSF/>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
    <Npsdetail/>
  </div>
</div>
    </div> 
    </div>
    </div>
  
    )
}
export default NPS;