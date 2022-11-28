import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/Context";


export function Instances() {
    const { instances} = useContext(AppContext);
    return (
        <div>
            <h1> Instâncias </h1>
            <ul>
                {instances.map((instance) => { 
                    return (
                        <li style={{'padding': '1rem'}}key={instance.id}>
                            <h2 style={{'padding': '.5rem'}}>{instance.name}</h2>
                            <p> <strong className="label"> id:  </strong> {instance.id}</p>
                            <p> <strong className="label"> tipo:  </strong> {instance.instance_type}</p>
                            <p> <strong className="label"> arn:  </strong> {instance.arn}</p>
                            <p> <strong className="label"> ami:  </strong> {instance.ami}</p>
                            <p> <strong className="label"> IP público:  </strong> {instance.public_ip}</p>
                            <p> <strong className="label"> IP privado:  </strong> {instance.private_ip}</p>
                            <p> <strong className="label"> DNS público:  </strong> {instance.public_dns}</p>
                            <p> <strong className="label"> Subnet ID: </strong>  {instance.subnet_id}</p>
                            <p> <strong className="label"> VPC Security Group IDs: </strong>  {instance.vpc_security_group_ids}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}