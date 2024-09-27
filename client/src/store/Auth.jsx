// This file will be Storing Server Response data (i.e Token) to our Local Storage
//  using Context APi -> react feature that share data globally without sharing data at each level.
// and useReducer Hook -> consumer that helps to access the Global state data

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [service, setService] = useState("");
    const userAuthorization = `Bearer ${token}`;

    const isLoggedIn = !!token; // Means agr token hai too "isLoggedIn" will be true or nhi hai too false

    const storeTokenInLocalStorage = (serverToken) => {
        setToken(serverToken); // this LINE I HAVE FORGOT (imp. line of code)
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
                // Authorization: `Bearer ${token}`,
                Authorization: userAuthorization,
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


    // get services data from Database
    const getServices = async () => {
       try {
         const response = await fetch("http://localhost:8000/api/v1/data/service", {
             method:"GET",
         });
         console.log("SERVICES DATA is : ", response);
 
         if(response.ok) {
            const serviesData = await response.json();  // this will convert the JSON data into object data coz backend send us the JSON data and in frontend we need Object data
            console.log("After converting services JSON data into Object data : ", serviesData);
            // console.log("After converting services JSON data into Object data : ", serviesData.message);

            setService(serviesData.message);
            
         }
       } catch (error) {
            console.log(`Error in Services Frontend/client side and the error is : ${error}`);
            
       }
    }

    

    
    



    useEffect( () => {
        userAuthentication();
        getServices();
    }, []);

    return (
        <AuthContext.Provider value={{storeTokenInLocalStorage, isLoggedIn, logoutUser, user, service, userAuthorization}} >
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
