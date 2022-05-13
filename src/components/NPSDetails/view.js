import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

const User = () => {
    const [user, setUser] = useState({
        Id:'',
        Fname: '',
        Lname: '',
        Pan: '',
        Dob: '',
        Email: '',
        Mobile: '' 
    }
    )
    const { ID } = useParams();
    const loadUser = async () => {
        const response = await axios.get(`https://localhost:44313/Api/NPSAccounts/${ID}`);
        setUser(response.data)
    }
    useEffect(()=>{
        loadUser()
    })
    return (
        <div>
            <div className='container'>
                <h1 className='display-4'>Account ID:{user.ID}</h1>
                <hr/>
                <ul className='list-group w-50'>
                    <li className='list-group-item'>First Name : {user.Fname}</li>
                    <li className='list-group-item'>Last Name : {user.Lname}</li>
                    <li className='list-group-item'>PAN Number : {user.Pan}</li>
                    <li className='list-group-item'>PAN Number : {user.Dob}</li>
                    <li className='list-group-item'> Email : {user.Email}</li>
                    <li className='list-group-item'>user Gender : {user.Mobile}</li>      
                </ul>
                <Link className="btn btn-primary" to="/nps">Back </Link>                
            </div>
        </div>
    )
}
export default User;