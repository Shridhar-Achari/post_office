import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const RegistrationList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata()

  }, [])
  const fetchdata = async () => {
    const response = await axios.get("https://localhost:44313/Api/NPSAccounts");
    setData(response.data)
  }

  const deleteuser = async (ID) => {
    await axios.delete(`https://localhost:44313/Api/NPSAccounts/${ID}`);
    fetchdata()
  }
  const [mode, setmode] = useState('light');
  return (
    <>
      <div className='container-fluID mb-5'>

    
        <div>
          <h1 className='text-center'>NPS Account Details:</h1>
        </div>
        <table className={`table border shadow table-bordered text-center  ${props.mode}`}>
          <thead className='table-dark' >
            <tr>
            <th scope="col">Sl.No</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Pan Number</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Email-ID</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, index) => (
              <tr>
                <td scope="row">{index + 1} </td>
                <td>{x.Fname}</td>
                <td>{x.Lname}</td>
                <td>{x.Pan}</td>
                <td>{x.Dob}</td>
                <td>{x.Email}</td>
                <td>{x.Mobile}</td>
                <td>
                  <Link className='btn btn-primary m-2' to={`/view/${x.ID}`}>View</Link>
                  <Link className='btn btn-primary  m-2' to={`/edit/${x.ID}`}>Edit</Link>
                  <button className='btn btn-primary  m-2' onClick={(e) => deleteuser(x.ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  )

}
export default RegistrationList;
