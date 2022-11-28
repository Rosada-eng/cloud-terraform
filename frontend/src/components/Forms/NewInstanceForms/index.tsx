import { useContext, useState } from "react";
import { AppContext } from "../../../context/Context";
import { StyledForms, StyledInput } from "./style";

export function NewForms() {
    const [Name, setName] = useState('');
    const [Ami, setAmi] = useState('');
    const [type, setType] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [securityGroupId, setSecurityGroupId] = useState('');
    const [subnetId, setSubnetId] = useState('');
    const [quantity, setQuantity] = useState(1);

    function clearForm() {
        setName('');
        setAmi('');
        setType('');
        setIsPublic(false);
        setSecurityGroupId('');
        setSubnetId('');
    }

    const {instances, setInstances, changedInstances, setChangedInstances} = useContext(AppContext);
    function handleAddInstance(event) {
        event.preventDefault();
        const newInstancesList = [];
        for(let i = 0; i < quantity; i++) {
            let name = Name;
            if (i !== 0) {
                name = `${Name}-${i}`;
            }

            const newInstance = {
                "name": name,
                "ami": Ami,
                "type": type,
                "key_name": "guilherme.rosada",
                "is_public": isPublic,
                "security_groups": [securityGroupId],
                "subnet_id": subnetId
            };

            newInstancesList.push(newInstance);
        }

        const newChangedInstances = newInstancesList.map((instance) => {
            return {'status': 'add', 'resource': instance}
        });
        console.log("new instances ", newInstancesList);

        setInstances([...instances, ...newInstancesList]);
        setChangedInstances([...changedInstances, ...newChangedInstances]);

        clearForm();

    }
    return (
        <div>
            <h1>Instância</h1>
            <StyledForms onSubmit={handleAddInstance}>
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
                    value={quantity}
                    min="1"
                    onChange={e => setQuantity(Number(e.target.value))}
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
    