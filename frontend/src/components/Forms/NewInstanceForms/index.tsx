import { useState } from "react";
import { StyledForms, StyledInput } from "./style";

export function NewForms() {
    const [Name, setName] = useState('');
    const [Ami, setAmi] = useState('');
    const [type, setType] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [securityGroupId, setSecurityGroupId] = useState('');
    const [subnetId, setSubnetId] = useState('');

    function clearForm() {
        setName('');
        setAmi('');
        setType('');
        setIsPublic(false);
        setSecurityGroupId('');
        setSubnetId('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(Name, Ami, type, isPublic, securityGroupId, subnetId);
        clearForm();

    }
    return (
        <div>
            <h1>Instância</h1>
            <StyledForms onSubmit={handleSubmit}>
                <label htmlFor="name"> Nome: </label>
                <StyledInput 
                    id="name"
                    type="text" 
                    value={Name} 
                    placeholder="Dê um nome para a Instância" 
                    onChange={e => setName(e.target.value)} 
                    required
                />
                <label htmlFor="ami"> AMI: (ex.: ami-09d56f8956ab235b3)</label>
                <StyledInput 
                    id="ami"
                    type="text" 
                    placeholder="Informe a imagem da instância"
                    value={Ami} 
                    onChange={e => setAmi(e.target.value)} 
                    required
                />

                <label htmlFor="type"> Tipo: (ex.: t2.micro) </label>
                <StyledInput 
                    id="type"
                    type="text" 
                    placeholder="Informe a capacidade da máquina"
                    value={type}
                    onChange={e => setType(e.target.value)} 
                    required
                />

                <label htmlFor="amount"> Quantidade: </label>
                <StyledInput
                    id="amount"
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    required
                />

                <label htmlFor="is_public"> É pública?: </label>
                <StyledInput 
                    id="is_public"
                    type="checkbox" 
                    checked={isPublic} 
                    onChange={e => setIsPublic(e.target.checked)} 
                    required
                />

                <label htmlFor="security_group_id"> ID do Grupo de Segurança:  </label>
                <StyledInput 
                    id="security_group_id"

                    type="text" 
                    value={securityGroupId} 
                    onChange={e => setSecurityGroupId(e.target.value)} 
                />

                <label htmlFor="subnet_id">ID da Subnet: </label>
                <StyledInput 
                    id="subnet_id"
                    type="text"
                    value={subnetId} 
                    onChange={e => setSubnetId(e.target.value)} 
                />

                <StyledInput type="submit" value="Submit" />


            </StyledForms>
        </div>
    );
}
    