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
            <div class="Container c1">
           
            {AboutPeople.map((record, i) =>
             <div key={i}> 
              {/* <div class="card"> 
                <img class="card-img-top abtimg" src={record.pic}  />
                <div class="card-body">
                  <h5 class="card-title">{record.name}</h5>
                  <p class="card-text">{record.post}</p>
                  <a href={record.path} class="btn btn-primary">MORE</a>
                </div>
              </div>
              </div> */}
              <div className="col-md-3">
        <div className="card Infocard cardbg bg-info">
          <div className="card-body">
         <img src={record.pic} class="abtimg" alt="About"/>
       <center>  <h5 className="card-title">{record.name}</h5>
            <p className="card-text">{record.post}</p>
            <br></br>
        
            <a href={record.path} class="btn btn-primary">MORE</a> <br></br>        
            </center> 
          </div>
        </div>
      </div>  
      </div>)}
        </div> 
     
        </div>  
        </div>
        </div>

);
}
}
export default About;