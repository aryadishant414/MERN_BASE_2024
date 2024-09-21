// This file will be Storing Server Response data (i.e Token) to our Local Storage
//  using Context APi -> react feature that share data globally without sharing data at each level.
// and useReducer Hook -> consumer that helps to access the Global state data

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");

    const isLoggedIn = !!token; // Means agr token hai too "isLoggedIn" will be true or nhi hai too false

    const storeTokenInLocalStorage = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }


    // tackling the logout functionality
    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }


    // AUTHENTICATION - to get the currently loggedIN user data
    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/auth/user", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
            });

            if(response.ok) {
                const data = await response.json();
                console.log("CURRENTLY LOGGED IN USER DATA : ", data.userData);
                
                setUser(data.userData);
            }

        } catch (error) {
            console.log("Error fetching user data");
            
        }
    }

    useEffect( () => {
        userAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{storeTokenInLocalStorage, isLoggedIn, logoutUser, user}} >
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
