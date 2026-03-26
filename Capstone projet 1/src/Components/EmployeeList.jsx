import "./EmployeeList.css"
import EmployeeCard from './EmployeeCard';

export default function EmployeeList({ employes }){
    return(
        <div className="employee-list">
          {employees.map((emp) => (
            <EmployeeCard key={emp.id} employee={emp} />
          ))}
        </div>
      );

}