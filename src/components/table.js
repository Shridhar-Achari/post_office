import React, { Component } from 'react';  
// import axios from 'axios';  
// import { Link } from 'react-router-dom'; 
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
  render() {  
    return (  
        <tr>  
            <td>  
            {this.props.obj.Fname}  
          </td> 
          <td>  
            {this.props.obj.Lname}  
          </td>  
          <td>  
            {this.props.obj.Pan}  
          </td>  
          <td>  
            {this.props.obj.Dob}  
          </td>  
          <td>  
            {this.props.obj.Email}  
          </td>  
          <td>  
            {this.props.obj.Mobile}  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;  