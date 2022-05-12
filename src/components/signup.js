import React, { Component } from "react";
import { Link } from "react-router-dom";
const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
const validation = ({ error, ...rest }) => {
    let checkValidation = false;

    Object.values(error).forEach(val => {
        if (val.length > 0) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    return checkValidation;
};
class Signup extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
        name: '',
        email: '',
        password: '',
        error: {
            name: '',
            email: '',
            password: ''
        }
    }
}
  onFormSubmit = event => {
    event.preventDefault();

    if (validation(this.state)) {
        console.log(this.state)
    } else {
        console.log("Error occured");
    }
};

formObject = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let error = { ...this.state.error };
    switch (name) {
        case "name":
            error.name = value.length < 5 ? "Name should be 5 characters long" : "";
            break;
        case "email":
            error.email = regularExpression.test(value)
                ? ""
                : "Email is not valid";
            break;
        case "password":
            error.password =
                value.length < 5 ? "Password should 5 characters long" : "";
            break;
        default:
            break;
    }
    this.setState({
        error,
        [name]: value
    })
};
render() {
    const { error } = this.state;
    return (
      // <Container>
      //   {/* <Row>
      //   <Col md="4">
      //   </Col>
      //     <Col md="4">
      //       <h1>Sign up</h1>
      //       <Form>
      //         <Form.Group controlId="usernameId">
      //           <Form.Label>User name</Form.Label>
      //           <Form.Control
      //             type="text"
      //             name="username"
      //             placeholder="Enter user name"
      //             value={this.state.username}
      //             onChange={this.onChange}
      //           />
      //           <FormControl.Feedback type="invalid"></FormControl.Feedback>
      //         </Form.Group>

      //         <Form.Group controlId="passwordId">
      //           <Form.Label>Your password</Form.Label>
      //           <Form.Control
      //             type="password"
      //             name="password"
      //             placeholder="Enter password"
      //             value={this.password}
      //             onChange={this.onChange}
      //           />
      //           <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
      //         </Form.Group>
      //       </Form>
      //      <Button 
      //         color="primary"
      //         onClick={this.onSignupClick}  
      //       >Sign up</Button>
      //       {/* <Link to="/home">Sign up</Link> */}
      //       <p className="mt-2">
      //         Already have account? <Link to="/login">Login</Link>
      //       </p>
      //     </Col>
      //     <Col md="4">
      //     </Col> */}
           <div className="container signupform signinwidth" style={{background:'#eeeee4',borderRadius:'20px'}}>
               
               <div class="col-sm-4"></div>
               <div class="col-sm-4">
               <div className="card md-4">
               <form className="card-body" onSubmit={this.onFormSubmit}>  
                   <div className="form-group mb-4">
                   <h1>Sign up</h1>
                       <label className="md-4"><strong>Name</strong></label>
                       <input 
                          required
                          type="text" 
                          name="name"
                          placeholder="Enter your name"
                          onChange={this.formObject}
                          className={error.name.length > 0 ? "is-invalid form-control" : "form-control"}/>
                       
                           {error.name.length > 0 && (
                           <span className="invalid-feedback">{error.name}</span>
                           )}
                   </div>
                   <div className="form-group mb-">
                       <label className="md-4"><strong>Email</strong></label>
                       <input
                           required
                           type="email"
                           name="email"
                           placeholder="Enter your Email"
                           className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}
                           onChange={this.formObject}/>

                           {error.email.length > 0 && (
                               <span className="invalid-feedback">{error.email}</span>
                           )}
                   </div>

                   <div className="form-group md-4">
                       <label className="md-4"><strong>Password</strong></label>
                       <input
                           required
                           type="password"
                           name="password"
                           placeholder="Enter your password"
                           className={error.password.length > 0 ? "is-invalid form-control" : "form-control"}
                           onChange={this.formObject}/>
                           {error.password.length > 0 && (
                               <span className="invalid-feedback">{error.password}</span>
                           )}
                   </div>
                   <div className="d-grid md-4">
                       <button type="submit" className="btn btn-block btn-primary">Submit</button>
                   </div>
               </form>
               {/*  <button 
              color="primary"
              onClick={this.onSignupClick}  
            >Sign up</button>
          <Link to="/home">Sign up</Link> */}
            <p className="md-4">
              Already have account? <Link to="/login">Login</Link>
            </p>
           </div>
           </div>
           </div>
    );
  }
}
export default Signup;




// import React, { Component } from "react";
// import axios from 'axios';  
// import { Link } from "react-router-dom";
// const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
// const validation = ({ error, ...rest }) => {
//     let checkValidation = false;

//     Object.values(error).forEach(val => {
//         if (val.length > 0) {
//             checkValidation = false
//         } else {
//             checkValidation = true
//         }
//     });

//     Object.values(rest).forEach(val => {
//         if (val === null) {
//             checkValidation = false
//         } else {
//             checkValidation = true
//         }
//     });

//     return checkValidation;
// };
// class Signup extends Component {
//     constructor(props){  
//         super(props)  
//         this.state = {    
//         Name:'',  
//         Email:'',  
//         Username:'',
//         Password:'',
//         error: {
//          Name: '',
//          Email: '',
//          Username:'',
//          Password: ''
//          } 
//         } 
//     } 
      
//         Signup=()=>{  
//           axios.post('https://localhost:44360/Api/UserRegistrations', {Name:this.state.Name,Email:this.state.Email,  
//           Username:this.state.Username, Password:this.state.Password})  
//         .then(json => {  
//         if(json.data.Status==='Success'){  
//           console.log(json.data.Status);  
//           alert("Data Save Successfully");  
//         this.props.history.push('/registrationlist')  
//         }  
//         else{  
//         alert('Data not Saved');  
//         debugger;  
//         this.props.history.push('/registrationlist')  
//         }  
//         })  
//         }  
  
           
//         handleChange= (e)=> {  
//         this.setState({[e.target.name]:e.target.value});  
//         }  
// //   constructor(props) {
// //     super(props)

// //     this.state = {
// //         name: '',
// //         email: '',
// //         password: '',
// //         error: {
// //             name: '',
// //             email: '',
// //             password: ''
// //         }
// //     }
// // }
//   onFormSubmit = event => {
//     event.preventDefault();

//     if (validation(this.state)) {
//         console.log(this.state)
//     } else {
//         console.log("Error occured");
//     }
// };

// formObject = event => {
//     event.preventDefault();
//     const { Name, value } = event.target;
//     let error = { ...this.state.error };
//     switch (Name) {
//         case "Name":
//             error.Name = value.length < 5 ? "Name should be 5 characters long" : "";
//             break;
//         case "Email":
//             error.Email = regularExpression.test(value)
//                 ? ""
//                 : "Email is not valid";
//             break;
//             case "Username":
//                 error.Username =
//                     value.length < 5 ? "Username should 5 characters long" : "";
//                 break;
//         case "Password":
//             error.Password =
//                 value.length < 5 ? "Password should 5 characters long" : "";
//             break;
//         default:
//             break;
//     }
//     this.setState({
//         error,
//         [Name]: value
//     })
// };
// render() {
//     const { error } = this.state;
//     return (
//         <div class='Row'>
//             <div className="card md-4"></div>
//            <div className="card md-4">
//                <form className="card-body" onSubmit={this.onFormSubmit}>  
//                    <div className="form-group mb-4">
//                    <h1>Sign up</h1>
//                        <label className="md-4"><strong>Name</strong></label>
//                        <input 
//                           required
//                           type="text" 
//                           name="Name"
//                           value={this.state.Name}
//                           placeholder="Enter your name"
//                           onChange={this.formObject}
//                           className={error.Name.length > 0 ? "is-invalid form-control" : "form-control"}/>
                       
//                            {error.Name.length > 0 && (
//                            <span className="invalid-feedback">{error.Name}</span>
//                            )}
//                    </div>
//                    <div className="form-group mb-">
//                        <label className="md-4"><strong>Email</strong></label>
//                        <input
//                            required
//                            type="email"
//                            name="Email"
//                            value={this.state.Email}
//                            placeholder="Enter user email"
//                            className={error.Email.length > 0 ? "is-invalid form-control" : "form-control"}
//                            onChange={this.formObject}/>


//                            {error.Email.length > 0 && (
//                                <span className="invalid-feedback">{error.Email}</span>
//                            )}
//                    </div>
//                    <div className="form-group mb-4">
//                        <label className="md-4"><strong>Username</strong></label>
//                        <input 
//                           required
//                           type="text" 
//                           name="Username"
//                           value={this.state.Username}
//                           placeholder="Enter user name"
//                           onChange={this.formObject}
//                           className={error.Username.length > 0 ? "is-invalid form-control" : "form-control"}/>
                       
//                            {error.Username.length > 0 && (
//                            <span className="invalid-feedback">{error.Username}</span>
//                            )}
//                    </div>

//                    <div className="form-group md-4">
//                        <label className="md-4"><strong>Password</strong></label>
//                        <input
//                            required
//                            type="password"
//                            name="Password"
//                            value={this.state.Password}
//                            placeholder="Enter user password"
//                            className={error.Password.length > 0 ? "is-invalid form-control" : "form-control"}
//                            onChange={this.formObject}/>
//                            {error.Password.length > 0 && (
//                                <span className="invalid-feedback">{error.Password}</span>
//                            )}
//                    </div>
//                    <div className="d-grid md-4">
//                        <button type="submit" className="btn btn-block btn-primary" onClick={this.Signup}>Submit</button>
//                    </div> 
//                </form>
//                {/*  <button 
//               color="primary"
//               onClick={this.onSignupClick}  
//             >Sign up</button>
//           <Link to="/home">Sign up</Link> */}
//             <p className="md-4">
//               Already have account? <Link to="/login">Login</Link>
//             </p>
//             </div>
//         </div>
//     );
//   }
// }
// export default Signup;