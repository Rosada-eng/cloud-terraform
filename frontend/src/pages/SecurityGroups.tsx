import { useContext } from "react";
import { AppContext } from "../context/Context";


export function SecurityGroups() {
    const { securityGroups} = useContext(AppContext);
    return (
        <div>
            <h1> Grupos de Segurança </h1>
            <ul>
                {securityGroups.map((sg) => { 
                    return (
                        <li style={{'padding': '1rem'}}key={sg.id}>
                            <h2 style={{'padding': '.5rem'}}>{sg.name}</h2>
                            <p> <strong > id:  </strong> {sg.id}</p>
                            <p> <strong > descrição:  </strong> {sg.description}</p>
                            <strong > ingress:  </strong>
                            <ul style={{'padding': '0 1rem'}}>
                                {sg.ingress.map((ingress) => {
                                    return (
                                        <li key={ingress.description}>
                                            <p> <strong >{ingress.from_port}/{ingress.to_port} </strong> </p>
                                            <p style={{'padding': '0 .5rem'}}> <strong > descrição:  </strong> {ingress.description}</p>
                                            <p style={{'padding': '0 .5rem'}}> <strong > protocolo:  </strong> {ingress.protocol}</p>
                                            <p style={{'padding': '0 .5rem'}}> <strong > CIDR blocks:  </strong> {ingress.cidr_blocks}</p>
                                        </li>
                                    )
                                })}
                            </ul> 
                            <strong > egress:  </strong>
                            <ul style={{'padding': '0 1rem'}}>
                                {sg.egress.map((egress) => {
                                    return (
                                        <li key={egress.description}>
                                            <p> <strong >{egress.from_port}/{egress.to_port} </strong> </p>
                                            <p style={{'padding': '0 .5rem'}}> <strong > descrição:  </strong> {egress.description}</p>
                                            <p style={{'padding': '0 .5rem'}}> <strong > protocolo:  </strong> {egress.protocol}</p>
                                            <p style={{'padding': '0 .5rem'}}> <strong > CIDR blocks:  </strong> {egress.cidr_blocks}</p>
                                        </li>
                                    )
                                    })}
                            </ul>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}