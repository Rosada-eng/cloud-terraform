import { useState } from "react";
import { StyledInput } from "../../style";
import { AddButon, GressFormsNumbersDiv, StyledInputNumbers } from "./style";

export function GressForms({gress_type, ingress, setIngress, hasIngress, setHasIngress}) {

    const [ingressDescription, setIngressDescription] = useState('');
    const [ingressFromPort, setIngressFromPort] = useState('');
    const [ingressToPort, setIngressToPort] = useState('');
    const [ingressProtocol, setIngressProtocol] = useState('');
    const [ingressCidrIp, setIngressCidrIp] = useState('');
    
    function clearForm() {
        setIngressDescription('');
        setIngressFromPort('');
        setIngressToPort('');
        setIngressProtocol('');
        setIngressCidrIp('');
    }

    function addGress() {
        console.log(gress_type, {
            description: ingressDescription,
            from_port: parseInt(ingressFromPort),
            to_port: parseInt(ingressToPort),
            protocol: ingressProtocol,
            cidr_blocks: ingressCidrIp.split(';')})

        setIngress([...ingress, {
            description: ingressDescription,
            from_port: parseInt(ingressFromPort),
            to_port: parseInt(ingressToPort),
            protocol: ingressProtocol,
            cidr_blocks: ingressCidrIp.split(';')
        }]);

        setHasIngress(true);
        clearForm();
    }


    return (
        <div> 
        <strong> {gress_type}: </strong>
        
            <GressFormsNumbersDiv> 
                <label htmlFor="ingressFromPort">de: </label>
                <StyledInputNumbers

                    id="ingressFromPort"
                    type="number"
                    placeholder="Porta"
                    value={ingressFromPort}
                    onChange={e => setIngressFromPort(e.target.value)}
                />
                <label htmlFor="ingressToPort"> até: </label>
                <StyledInputNumbers
                    id="ingressToPort"
                    type="number"
                    placeholder="Porta"
                    value={ingressToPort}
                    onChange={e => setIngressToPort(e.target.value)}
                />
                <label htmlFor="ingressProtocol"> Protocolo: </label>
                <StyledInputNumbers
                    id="ingressProtocol"
                    type="text"
                    placeholder="Protocolo"
                    value={ingressProtocol}
                    onChange={e => setIngressProtocol(e.target.value)}
                />
            </GressFormsNumbersDiv>
            <label htmlFor="ingressDescription"> Descrição: </label>
            <StyledInput
                id="ingressDescription"
                type="text"
                placeholder="Descreva brevemente a função do ingresso"
                value={ingressDescription}
                onChange={e => setIngressDescription(e.target.value)}
            />
            <label htmlFor="ingressCidrIp"> CIDR IP: </label>
            <StyledInput
                id="ingressCidrIp"
                type="text"
                placeholder="IP CIDR (separado por ;) "
                value={ingressCidrIp}
                onChange={e => setIngressCidrIp(e.target.value)}
            />

            <AddButon onClick={addGress}> Add </AddButon>
        </div>
    )
}