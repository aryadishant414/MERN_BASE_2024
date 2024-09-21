// This file will be Storing Server Response data (i.e Token) to our Local Storage
//  using Context APi -> react feature that share data globally without sharing data at each level.
// and useReducer Hook -> consumer that helps to access the Global state data

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const isLoggedIn = !!token; // Means agr token hai too "isLoggedIn" will be true or nhi hai too false

    const storeTokenInLocalStorage = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }

    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{storeTokenInLocalStorage, isLoggedIn, logoutUser}} >
            {children}
        </AuthContext.Provider>
    );
};


// custom hook 
// creating consumer
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);

    if(!authContextValue) {
        throw new Error("useAuth used outside of the Provider"); // this if condition is optional
    }
    return authContextValue;
}
