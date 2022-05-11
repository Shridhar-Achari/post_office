import React, { Component } from "react";
//import Img1 from '../assets/slide1.jpg';
// import Img2 from '../assets/slide2.jpg';
// import Img3 from '../assets/slide3.jpg';
// import Img4 from '../assets/plogo.jpg';
class Carousel extends Component {
  render() {
    return (
      <div className="App">
        <div class="container-fluid">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">   
            <div class="carousel-inner" role="listbox">
            <div>
            <ol class="carousel-indicators">  
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>  
              <li data-target="#myCarousel" data-slide-to="1"></li>  
              <li data-target="#myCarousel" data-slide-to="2"></li> 
            </ol> 
          </div> 
            <div class="item active">  
              <img id="slide" src="https://www.indiapost.gov.in/VAS/PublishingImages/gdsbanner_eng.png" alt="slide1"></img>
              <div class="carousel-caption"><br></br>
                {/* <h1><strong> POST OFFICE SCHEMES</strong></h1>
                <p>We give our best</p><br></br> */}
                <button type="button" id="btn" class="btn btn-primary" onclick=''>Know More</button> 
              </div>
            </div>  
            <div class="item">  
              <img id="slide" src="https://www.indiapost.gov.in/VAS/PublishingImages/CollageBannerrrevised.jpg" alt="slide2"></img>
              <div class="carousel-caption"><br></br>
                {/* <h1><strong> SRB BANK</strong></h1>
                <p>We don’t expect a big deposit, but small deposits add up</p><br></br> */}
                <button type="button" id="btn" class="btn btn-primary" onClick=''>Know More</button> 
              </div>  
            </div>  
            <div class="item">  
              <img id="slide" src="https://www.indiapost.gov.in/VAS/PublishingImages/BUSINESS%20PARCEL-B.jpg" alt="slide3"></img>
              <div class="carousel-caption"><br></br>
                {/* <h1><strong> SRB BANK</strong></h1>
                <p>We don’t expect a big deposit, but small deposits add up</p><br></br> */}
                <button type="button" id="btn" class="btn btn-primary" onClick=''>Know More</button> 
              </div>
            </div>  
          </div>  
          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">  
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>  
            <span class="sr-only">Previous</span>
          </a>  
          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"> 
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>  
            <span class="sr-only">Next</span>  
          </a>     
      </div> 
      </div>
      <div>
    </div>
    </div>
    );
  }
}
export default Carousel;