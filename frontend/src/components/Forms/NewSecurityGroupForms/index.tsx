import { useState } from "react";
import { GressForms } from "./components/GressForms";
import { StyledForms, StyledInput } from "./style";

interface IGress {
    from: number;
    to: number;
    protocol: string;
    description: string;
    cidr_blocks: [string]
}
export function NewSecurityGroupForms() {
    const [Name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [hasIngress, setHasIngress] = useState(false);
    const [hasEgress, setHasEgress] = useState(false);

    const [ingress, setIngress] = useState<[IGress]>([{} as IGress]);

    
    const [egress, setEgress] = useState<[IGress]>([{} as IGress]);


    function clearForm() {
        setName('');
        setDescription('');
        setIngress([{} as IGress]);
        setEgress([{} as IGress]);
    }

    function handleSubmit(event) {

        // CHECAR SE HÁ INGRESS E EGRESS. SE NÃO TIVER, COLOCAR VALOR PADRÃO 
        event.preventDefault();

        const newSG = {
            name: Name,
            description: description,
            ingress: ingress.filter(ingress => Object.keys(ingress).length !== 0),
            egress: egress.filter(egress => Object.keys(egress).length !== 0),
        }

        console.log(newSG);
        
        clearForm();

    }
    return (
        <div>
            <h1>Grupo de Segurança</h1>
            <StyledForms onSubmit={handleSubmit}>
                <label htmlFor="name"> Nome: </label>
                <StyledInput 
                    id="name"
                    type="text" 
                    value={Name} 
                    placeholder="Dê um nome para o Grupo de Segurança" 
                    onChange={e => setName(e.target.value)} 
                    required
                />
                <label htmlFor="description"> Descrição: </label>
                <StyledInput 
                    id="description"
                    type="text" 
                    placeholder="Descreva brevemente a função do grupo"
                    value={description} 
                    onChange={e => setDescription(e.target.value)} 
                    required
                />

                <GressForms 
                    gress_type={'ingress'}
                    hasIngress={hasIngress}
                    setHasIngress={setHasIngress}
                    ingress={ingress} 
                    setIngress={setIngress}
                />
                <GressForms 
                    gress_type={'egress'}
                    hasIngress={hasEgress}
                    setHasIngress={setHasEgress}
                    ingress={egress} 
                    setIngress={setEgress}
                />
                 {!hasIngress ? 
                    <div>
                        <strong>Informe uma lista de ingress</strong>
                    </div>
                    :
                    <div>
                        <strong>Ingress</strong>
                        {ingress.map((item, index) => {
                            return (
                            <p key={index}>{item.from} / {item.to}</p>
                            )
                        })}

                    </div>
                }

                {!hasEgress ? 
                    <div>
                        <strong>Informe uma lista de egress</strong>
                    </div>
                    :
                    <div>
                        <strong>Egress</strong>
                            {egress.map((item, index) => {
                                return (
                                    <p key={index}>{item.from} / {item.to}</p>
                                )
                            })}

                    </div>
                }
               
                <StyledInput type="submit" value="Submit" />


            </StyledForms>
        </div>
    );
}
    