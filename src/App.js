import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmplyee from "./components/ListEmplyee";
import EmpolyeeService from "./services/EmpolyeeService";
import './App.css';
import AddEmpolyee from "./components/AddEmpolyee";
import ViewEmployee from "./components/ViewEmployee";



function App() {

  const [listEmployee, setListEmployee] = useState([]);

  useEffect(() =>{

    EmpolyeeService.getEmployees()
    .then(Response => setListEmployee(Response.data))

  },[])

  // const addEmployee = (employee) => {
  //   //ajouter sur le serveur 
  //  EmpolyeeService.addEmployee()
  //  .then(response => {console.log(response);
  //     // if (response.status === 200) {
  //     //   alert("task added successfully : " + response.data.id)
       
  //     //   setListEmployee([new EmployeeModel(response.data.id, employee), ...listEmployee])
       
  //     // }
  //   })

  // }
  return (
    
    <div>
      <Router>
      <Header />
    <div className="container">
           <Routes>
                 <Route path="/" element={<ListEmplyee  listEmployee={listEmployee}/>} />
                 <Route path="/employees" element={<ListEmplyee  listEmployee={listEmployee}/>} />
                 <Route path="/addEmployees" element={<AddEmpolyee  />} />
                 <Route path="/viewEmployees/:id" element={<ViewEmployee />}/>
          </Routes>
     
      </div>
    <Footer />
    </Router>
    </div>
  );
}

export default App;
