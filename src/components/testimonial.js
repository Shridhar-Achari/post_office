import React, { Component } from "react";
import Testimonial from './cstyling';
//import Tes1 from '../assets/post.png';

class Test extends Component {
  render() {
    return (
      <div className="App">
<div class="container-fluid">
<div class="npshead">
        <h2>Testimonials</h2>
        </div>
      <div>
      <Testimonial
        img ="https://randomuser.me/api/portraits/men/44.jpg"
        name='Arun'
        post='Manager'
        addr='Hyderabad'
      />
      <Testimonial
      img ="https://randomuser.me/api/portraits/men/48.jpg"
        name='Kiran'
        post='supervisor'
        addr='Karnataka'
      />
      <Testimonial
      img ="https://randomuser.me/api/portraits/men/72.jpg"
        name='Bharath'
        post='Manager'
        addr='Bangalore'
      />
      <Testimonial
      img ="https://randomuser.me/api/portraits/men/67.jpg"
        name='Harish'
        post='React'
        addr='Pune'
      />
    </div>
    </div>
    </div>
    );
  }
}

export default Test;