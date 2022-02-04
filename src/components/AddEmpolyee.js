import React, { useState}  from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import EmpolyeeService from '../services/EmpolyeeService';


function AddEmpolyee() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const navigate = useNavigate ();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, emailId}

            EmpolyeeService.addEmployee(employee).then((response) =>{

                console.log(response.data)
    
                navigate('/employees');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
   


  return (
    <div>
    <br></br>
       <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                    
                    <div className = "card-body">
                        <form>
                            <div className = "form-group">
                                <label> First Name: </label>
                                <input placeholder="First Name" 
                                  name = "firstName"
                                  className = "form-control"
                                  value = {firstName}
                                  onChange = {(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className = "form-group">
                                <label> Last Name: </label>
                                <input   type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)} />
                            </div>
                            <div className = "form-group">
                                <label> Email Id: </label>
                                <input  type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)} />
                            </div>
                            <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                            <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                        </form>
                    </div>
                </div>
            </div>

       </div>
</div>
  )
}

export default AddEmpolyee;
