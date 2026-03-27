import { useState } from "react";
import EmployeeList from "../Components/EmployeeList";
import EmployeeForm from "../Components/EmployeeForm";
import { employes } from "../data/employes";

export default function EmployeeDashboard()
{
  const [employees,setEmployees]=useState(employes);
  const addEmployee= (employee)=>{
    setEmployees([...employees,employee]);
  };
 return (
   <>
   <div className="dashboard">
    <h1>Gestion des employes</h1>
    <EmployeeForm addEmployee={addEmployee}/>
     <EmployeeList employes={employees}/>
   </div>
      

   </>



 );

}