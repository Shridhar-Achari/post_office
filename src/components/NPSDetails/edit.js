import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
const Edit = () => {
let navigate = useNavigate();
const {ID} = useParams();
  const [user, setUser] = useState({
    Fname: '',
    Lname: '',
    Pan: '',
    Dob: '',
    Email: '',
    Mobile: '' 
}
)
  const { Fname, Lname,Pan, Dob,Email, Mobile } = user
const handleChange = (e) => {
  setUser({...user, [e.target.name]: e.target.value });
};
const onSubmit =async (e) =>{
  e.preventDefault();
  await axios.put(`https://localhost:44313/Api/NPSAccounts/${ID}`, user);
  alert('Record Submited Successfully');
  navigate('/nps');
}
const loadUser=async() =>{
  const response = await axios.get(`https://localhost:44313/Api/NPSAccounts/${ID}`);
  setUser(response.data)
}
useEffect(()=>{
  loadUser()
},[]);
return (
  <Container className="App">
    <div className=''>

    </div>
    <h4 className="PageHeading">Edit Details</h4>
    <Form className="form" >
      <Col>
        <FormGroup row>
          <Label for="Fname" sm={2}>First Name</Label>
          <Col sm={10}>
            <Input type="text" name="Fname" onChange={e => handleChange(e)} value={Fname} placeholder="Enter First Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Lname" sm={2}>Last Name</Label>
          <Col sm={10}>
            <Input type="text" name="Lname" onChange={e => handleChange(e)} value={Lname} placeholder="Enter Last Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Pan" sm={2}>PAN Number</Label>
          <Col sm={10}>
            <Input type="text" name="Pan" onChange={e => handleChange(e)} value={Pan} placeholder="Enter PAN Number" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Dob" sm={2}>Date of Birth</Label>
          <Col sm={10}>
            <Input type="text" name="Dob" onChange={e => handleChange(e)} value={Dob} placeholder="yyyy/mm/dd" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="Email" onChange={e => handleChange(e)} value={Email} placeholder="Enter email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Mobile" sm={2}>Mobile</Label>
          <Col sm={10}>
            <Input type="number" name="Mobile" onChange={e => handleChange(e)} value={Mobile} placeholder="Enter Mobile Number" />
          </Col>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup row>
          <Col sm={5}>
          </Col>
          <Col sm={1}>
            <button type="button" onClick={e=> onSubmit(e)} className="btn btn-success">Submit</button>
          </Col>
          <Col sm={1}>
            <Button color="danger">Cancel</Button>{' '}
          </Col>
          <Col sm={5}>
          </Col>
        </FormGroup>
      </Col>
    </Form>
  </Container>
);
}

export default Edit;  