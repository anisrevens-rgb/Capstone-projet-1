import { useState } from "react"
import "./EmployeeForm.css"
export default function EmployeeForm({addEmployee}){
    const [name,setName]= useState("");
     const [poste,setPoste]= useState("");
      const [departement,setDepartement]= useState("");
      const handleSubmit=(e)=>{
        e.preventDefault();
        if (!name||!poste|| !departement) return;
        const newEmployee={
            id: Date.now(),
            name,
            poste,
            departement,
            status :"Actif",
        };
        addEmployee(newEmployee);
        setName("")
        setPoste("")
        setDepartement("")
      }
return(
    <form className="form-container"
    onSubmit={handleSubmit}>
       <h2>Ajouter un employé</h2>
        <div className="form-card">
            <label htmlFor="name">Nom: </label>
            <input
          value={name} onChange={(e)=>
            setName(e.target.value)
          }
            />
            
        </div>
            <div className="form-card">
            <label htmlFor="poste">Poste: </label>
            <input
          value={poste} onChange={(e)=>
            setPoste(e.target.value)}

            
            />
            
        </div>
            <div className="form-card">
            <label htmlFor="departement">Departement :</label>
            <input
           value={departement} onChange={(e)=>
            setDepartement(e.target.value)}
            />
            
        </div>
        
            
        
        
        <button type="submit" className="form-button">Ajouter l'employe</button>

    </form>
)
}