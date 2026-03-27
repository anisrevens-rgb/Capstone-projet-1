import "./EmployeeList.css"
import EmployeeCard from './EmployeeCard';


export default function EmployeeList({ employes }){
    return(
        <div className="employee-list">
          {employes.map((emp) => (
            <EmployeeCard
             key={emp.id}
             name={emp.name}
             poste={emp.poste}
             departement={emp.departement}
             status={emp.status}  />
          ))}
        </div>
      );

}