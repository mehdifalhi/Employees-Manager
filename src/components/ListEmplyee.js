import React, { useEffect, useState}  from 'react';
import { Link, useNavigate } from "react-router-dom";
import EmpolyeeService from '../services/EmpolyeeService';
function ListEmplyee() {
    
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate ();

    useEffect(() => {

        getEmployees();
    }, [])

    const getEmployees = () => {
        EmpolyeeService.getEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteEmployee = (employeeId) => {
        EmpolyeeService.deleteEmployee(employeeId).then((response) => {
            getEmployees();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }
     const viewEmployee =(id) =>{
        navigate(`/viewEmployees/${id}`);
    }
 
 
 return <div>
  <h2 className="text-center">Employees List</h2>

     <Link  to="/addEmployees"  className='btn btn-success'> Add Employee</Link>
     
 
  <br></br>
  <div className = "row">
         <table className = "table table-striped table-bordered">

             <thead>
                 <tr>
                     <th> Employee First Name</th>
                     <th> Employee Last Name</th>
                     <th> Employee Email Id</th>
                     <th> Actions</th>
                 </tr>
             </thead>
             <tbody>
                 {
                     employees.map(
                         employee => 
                         <tr key = {employee.id}>
                              <td> { employee.firstName} </td>   
                              <td> {employee.lastName}</td>
                              <td> {employee.emailId}</td>
                              <td>
                                  
                                  <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                     <button  to="/viewEmployees" className = "btn btn-success" 
                                    style = {{marginLeft:"10px"}}  onClick={ () => viewEmployee(employee.id)}> View</button>
                                  
                              </td>
                         </tr>
                     )
                 }
             </tbody>
         </table>

  </div>

</div>;
}

export default ListEmplyee;
