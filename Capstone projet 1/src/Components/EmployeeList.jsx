import "./EmployeeList.css"
import EmployeeCard from './EmployeeCard';
import { employees } from "../data/employes";

export default function EmployeeList({ employes }){
    return(
        <div className="employee-list">
          {employees.map((emp) => (
            <EmployeeCard
             key={emp.id}
             name={emp.name}
             poste={emp.poste}
             department={emp.department}
             status={emp.status}  />
          ))}
        </div>
      );

}