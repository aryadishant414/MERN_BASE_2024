// This file will be Storing Server Response data (i.e Token) to our Local Storage
//  using Context APi -> react feature that share data globally without sharing data at each level.
// and useReducer Hook -> consumer that helps to access the Global state data

import { createContext, useContext } from "react";

const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const storeTokenInLocalStorage = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }

    return (
        <AuthContext.Provider value={{storeTokenInLocalStorage}} >
            {children}
        </AuthContext.Provider>
    );
};


// custom hook 
// creating consumer
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);

    if(!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}
