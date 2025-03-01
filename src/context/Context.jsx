import { createContext, useState } from "react";
import useToast from "../hooks/useToast";
export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [consultaToast, setConsultaToast] = useState(false);
    const Toasthook = useToast();
    function newToats(type, message) {
        Toasthook.addToast(type, message);
        setConsultaToast(prev => !prev);
    }
    

    const valores = {
        newToats,
        setConsultaToast,
        consultaToast
    }
    return (
        <GlobalContext.Provider value={valores}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider