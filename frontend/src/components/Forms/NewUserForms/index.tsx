import { useContext, useState } from "react";
import { AppContext } from "../../../context/Context";
import { StyledForms, StyledInput } from "./style";

export function NewUserForms() {
    const [Name, setName] = useState('');

    const {IAMUsers, setIAMUsers} = useContext(AppContext);

    function clearForm() {
        setName('');

    }

    function handleAddIAMUser(event) {
        event.preventDefault();

        console.log("new user ", Name);
        setIAMUsers([...IAMUsers, Name]);

        clearForm();

    }
    return (
        <div>
            <h1>Usuário IAM</h1>
            <StyledForms onSubmit={handleAddIAMUser}>
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
    