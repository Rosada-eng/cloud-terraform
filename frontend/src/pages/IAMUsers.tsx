import { useContext } from "react";
import { AppContext } from "../context/Context";


export function IAMUsers() {
    const { IAMUsers} = useContext(AppContext);
    return (
        <div>
            <h1> Usuários IAM </h1>
            <ul>
                {IAMUsers.map((users) => { 
                    return (
                        <li style={{'padding': '1rem'}}key={users.name}>
                            <h2 style={{'padding': '.5rem'}}>{users.name}</h2>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}