import React from 'react';  
import axios from 'axios'; 
//import Reg from './registrationlist'
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Npsform extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
Name:'',  
Email:'',  
}  
 }  
Npsform=()=>{  
  axios.post('https://localhost:44313/Api/NPSAccounts', {Fname:this.state.Fname,Lname:this.state.Lname,Pan:this.state.Pan,Dob:this.state.Dob,Email:this.state.Email,Mobile:this.state.Mobile})  
.then(json => {  
// if(json.data.Status===200){  
//   console.log(json.data.Status);  
//   alert("Data Save Successfully");  
// this.props.history.push("/NPSList")
// }  
// else{  
alert('Data Save Successfully');  
window.location.reload(false)
// debugger;  
// this.props.history.push('/NPSList')  
// }  
 })  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App"> 
    <div class="npshead"><h4 className="PageHeading">Create NPS Account</h4></div> 
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="Fname" sm={2}>First name</Label>  
          <Col sm={10}>  
            <Input type="text" name="Fname" onChange={this.handleChange} value={this.state.Fname} placeholder="Enter First Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Lname" sm={2}>Last Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="Lname" onChange={this.handleChange} value={this.state.Lname} placeholder="Enter Last Name" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="Pan" sm={2}>PAN Number</Label>  
          <Col sm={10}>  
            <Input type="text" name="Pan" onChange={this.handleChange} value={this.state.Pan} placeholder="Enter PAN Card Number" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="date" sm={2}>Date of Birth</Label>  
          <Col sm={10}>  
            <Input type="date" name="Dob" onChange={this.handleChange} value={this.state.Dob} placeholder="yyyy/mm/dd" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="email" sm={2}>Email</Label>  
          <Col sm={10}>  
            <Input type="email" name="Email" onChange={this.handleChange} value={this.state.Email} placeholder="Enter your email" />  
          </Col> 
          </FormGroup>
          <FormGroup row>  
          <Label for="Mobile" sm={2}>Mobile Number</Label>  
          <Col sm={10}>  
            <Input type="number" name="Mobile" onChange={this.handleChange} value={this.state.Mobile} placeholder="Enter your mobile number" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Col sm={10}>  
            <Input type="checkbox" name="Linked" onChange={this.handleChange} value="" />
            </Col>
            <Label for="Aadhaar" sm={10}>Mobile Number Linked with Aadhaar</Label> 
        </FormGroup> 
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={2}>
          <button type="button" onClick={this.Npsform} className="btn btn-success">Open New Account</button>  
          </Col> 
          <Col sm={1}> 
            <Button color="danger" left="100px">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}    
}  
   
export default Npsform;