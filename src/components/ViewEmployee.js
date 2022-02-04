import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import EmpolyeeService from '../services/EmpolyeeService';

function ViewEmployee() {

    const [employee, setEmployee] = useState([])
    const params = useParams()
    useEffect(() => {

        EmpolyeeService.getEmployeeById(params.id).then( response => {
             setEmployee(response.data);
           // console.log(response);
        })
    }, [])
  return (

    <div>
    <br></br>
    <div className = "card col-md-6 offset-md-3">
        <h3 className = "text-center"> View Employee Details</h3>
        <div className = "card-body">
            <div className = "row">
                <label> Employee First Name: </label>
                <h3> {employee.firstName}</h3>
            </div>
            <div className = "row">
                <label> Employee Last Name: </label>
                <h3>{employee.lastName}</h3>
            </div>
            <div className = "row">
                <label> Employee Email ID: </label>
                <h3>{employee.emailId}</h3>
            </div>
            <Link to="/employees" className="btn btn-danger"> Cancel </Link>
        </div>

    </div>
</div>
  );
}

export default ViewEmployee;
