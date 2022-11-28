import { createContext, useState } from "react";

interface AppContextType {
    instances: any[];
    securityGroups: any[];
    IAMUsers: any[];
    setInstances: any;
    setSecurityGroups: any;
    setIAMUsers: any;

}

export const AppContext = createContext({} as AppContextType);

export const AppProvider = ({ children }: any) => {
    const [instances, setInstances] = useState([]);
    const [securityGroups, setSecurityGroups] = useState([]);
    const [IAMUsers, setIAMUsers] = useState([]);

    const ContextValue = { instances, securityGroups, IAMUsers, setInstances, setSecurityGroups, setIAMUsers }

    return (
        <AppContext.Provider value={ContextValue}>
            {children}
        </AppContext.Provider>
    )
}