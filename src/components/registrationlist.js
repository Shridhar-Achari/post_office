import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './table';
  
export default class NPSList extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:44313/Api/NPSAccounts')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <div class="npshead"><h4 align="center">NPS Account Details:</h4></div>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
              <th>First Name</th> 
                <th>Last Name</th>  
                <th>PAN Number</th> 
                <th>Date of Birth</th> 
                <th>Email</th>  
                <th>Mobile</th>  
                {/* <th colSpan="4">Action</th>   */}
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  