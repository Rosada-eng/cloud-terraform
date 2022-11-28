import { createContext, useState } from "react";

interface AppContextType {
    vpcName: string;
    instances: any[];
    securityGroups: any[];
    IAMUsers: any[];

    changedInstances: any[];
    changedSecurityGroups: any[];
    changedIAMUsers: any[];

    setVpcName: any;
    setInstances: any;
    setSecurityGroups: any;
    setIAMUsers: any;

    setChangedInstances: any;
    setChangedSecurityGroups: any;
    setChangedIAMUsers: any;

}

export const AppContext = createContext({} as AppContextType);

export const AppProvider = ({ children }: any) => {
    const [vpcName, setVpcName ] = useState();
    const [instances, setInstances] = useState([]);
    const [securityGroups, setSecurityGroups] = useState([]);
    const [IAMUsers, setIAMUsers] = useState([]);

    const [changedInstances, setChangedInstances] = useState([]);
    const [changedSecurityGroups, setChangedSecurityGroups] = useState([]);
    const [changedIAMUsers, setChangedIAMUsers] = useState([]);

    const ContextValue = { 
        vpcName, setVpcName,
        instances, setInstances,
        securityGroups,  setSecurityGroups,
        IAMUsers,  setIAMUsers,
        changedInstances, setChangedInstances,
        changedSecurityGroups, setChangedSecurityGroups,
        changedIAMUsers, setChangedIAMUsers
    }

    return (
        <AppContext.Provider value={ContextValue}>
            {children}
        </AppContext.Provider>
    )
}