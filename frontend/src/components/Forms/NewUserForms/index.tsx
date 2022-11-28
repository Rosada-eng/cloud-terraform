import { useState } from "react";
import { StyledForms, StyledInput } from "./style";

export function NewUserForms() {
    const [Name, setName] = useState('');


    function clearForm() {
        setName('');

    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(Name);
        clearForm();

    }
    return (
        <div>
            <h1>Usuário IAM</h1>
            <StyledForms onSubmit={handleSubmit}>
                <label htmlFor="name"> Nome: </label>
                <StyledInput 
                    id="name"
                    type="text" 
                    value={Name} 
                    placeholder="Dê um nome para o Usuário" 
                    onChange={e => setName(e.target.value)} 
                    required
                />

                <StyledInput type="submit" value="Submit" />


            </StyledForms>
        </div>
    );
}
    