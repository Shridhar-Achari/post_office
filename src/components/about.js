import React, { Component } from "react";
//import Logo1 from '../assets/postlogo.jpg';
import AboutPeople from '../jsondata/about.json';
class About extends Component {
    render() {
      return (
        <div className="App">
        <div class="container-fluid">
        
          <div class="aboutus">
          <div class="container">
            
            <h1>ABOUT-US</h1>
            <h3>For more than 150 years, the Department of Posts (DoP) has been the backbone of the country’s communication and has played a crucial role in the country’s social economic development. It touches the lives of Indian citizens in many ways: delivering mails, accepting deposits under Small Savings Schemes, providing life insurance cover under Postal Life Insurance (PLI) and Rural Postal Life Insurance (RPLI) and providing retail services like bill collection, sale of forms, etc. The DoP also acts as an agent for Government of India in discharging other services for citizens such as Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS) wage disbursement and old age pension payments. With more than 1,55,000 post offices, the DoP has the most widely distributed postal network in the world.</h3>
            </div>
        <div class="Container1">
        <div className="image-fluid">
        <div class="row">
        {AboutPeople.map((record, i) =>
          <div key={i}>
        
        <div class="col-sm-3">
        <div class="card bg-light">
        <img src={record.pic} class="img1" height='150px' width='150px' />
          <div class="card-body">
          <a href=""><h5 class="card-title">{record.name}</h5></a>
          {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
          <a href="#" class="btn btn-primary">MORE</a>
        </div>
      </div>
    </div>
  </div>)}
  </div>
  </div>
  </div>
</div>
</div>
</div>
        

);
}
}
export default About;