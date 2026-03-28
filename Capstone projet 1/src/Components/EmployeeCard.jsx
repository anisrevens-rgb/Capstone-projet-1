import "./EmployeeCard.css"

export default function EmployeeCard( employes ){
    return (
<div className="employee-card">
<p><strong>Nom:</strong> {employes.name}   </p>
<p><strong>Poste :</strong> {employes.poste }  </p>
<p><strong>département :</strong> {employes.departement}  </p>
<p><strong>status :</strong> {employes.status}  </p>


</div>


    );

}