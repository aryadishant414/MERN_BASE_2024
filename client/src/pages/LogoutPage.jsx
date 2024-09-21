import { useEffect } from "react";
import { useAuth } from "../store/Auth.jsx";
import { Navigate } from "react-router-dom";


export const LogoutPage = () => {
    const {logoutUser} = useAuth();
    
    logoutUser();

    // useEffect( 
    //     () => {
    //     logoutUser();
    //     }, 
    //     [logoutUser]
    // );

    return <Navigate to="/login" />

};