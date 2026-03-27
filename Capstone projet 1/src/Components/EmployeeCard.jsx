import "./EmployeeCard.css"

export default function EmployeeCard( employes ){
    return (
<div className="employee-card">
<p><strong>name :</strong> {employes.name}   </p>
<p><strong>Poste :</strong> {employes.poste }  </p>
<p><strong>departement :</strong> {employes.departement}  </p>
<p><strong>status :</strong> {employes.status}  </p>


</div>


    );

}