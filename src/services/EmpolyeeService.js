import axios from "axios";

const EMPOLYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
class EmployeeServices {

    getEmployees(){

        return axios.get(EMPOLYEE_API_BASE_URL);
    }

    addEmployee(employee){
        return axios.post(EMPOLYEE_API_BASE_URL, employee);
    }
    deleteEmployee(employeeId){
        return axios.delete("http://localhost:8080/api/v1" + '/' + employeeId);
    }
    getEmployeeById(id){
        return axios.get("http://localhost:8080/api/v1" +'/'+id)
    }

}

export default new EmployeeServices() 