import "./EmployeeForm.css"
export default function EmployeeForm(){
return(
    <form className="form-container">
        <div className="form-card">
            <label htmlFor="name">Nom </label>
            <input
            id="name"
            type="text"
            placeholder="Entrer le nom"
            />
            
        </div>
            <div className="form-card">
            <label htmlFor="position">Position </label>
            <input
            id="position"
            type="text"
            placeholder="Entrer la position"
            />
            
        </div>
            <div className="form-card">
            <label htmlFor="departement">Departement</label>
            <input
            id="name"
            type="text"
            placeholder="Entrer le departement"
            />
            
        </div>
        <button type="submit" className="form-button">Ajouter l'employe</button>

    </form>
)
}