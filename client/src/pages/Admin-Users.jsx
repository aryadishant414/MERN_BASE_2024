import { useEffect, useState } from "react";
import { useAuth } from "../store/Auth.jsx";
import {Link, Outlet, useLocation  } from "react-router-dom";
// import {Outlet} from "react-router-dom";

export const AdminUsers = () => {
    const {userAuthorization} = useAuth(); // inside this we have "Bearer " token
    const [user, setUser] = useState([]);

    const location = useLocation();  // this will give the current route's path
    

    const showAllUsers = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/admin/users", {
                method:"GET",
                headers: {
                    Authorization: userAuthorization
                }
            });

            const data = await response.json();

            console.log("DATA INSIDE ADMIN USERS While requesting through Frontend : ", data);

            setUser(data);
            
        } catch (error) {
            console.log("Error while Fetching All users from Frontend");
            
        }
    }


    // Delete a user by its ID
    const deleteUserById = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/admin/users/delete/${id}`,{
                method: "DELETE",
                headers: {
                    Authorization: userAuthorization
                }  
            });

            if(response.ok) {
                showAllUsers();
            }
        } catch (error) {
            console.log("ERROR while deleting a user from FRONTEND SIDE");
            
        }
    }

    useEffect( () => {
        showAllUsers();
    }, []);

    return (
        <>
        {/* COnditional rendering for Parent and child component(i.e Outlet) */}
        {
            location.pathname === "/admin/users" && (
                <section className="admin-users-section">
            <div className="container">
                <h1>Admin Users Data</h1>
            </div>
            <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((currentUser, index) => {
                            {/* console.log("CURRENT USER IS : ", currentUser.username); */}
                            return (
                                <tr key={index}>
                                    <td>{currentUser.username}</td>
                                    <td>{currentUser.email}</td>
                                    <td>{currentUser.phone}</td>
                                    <td><Link to={`/admin/users/update/${currentUser._id}`}>Edit</Link></td>
                                    <td>
                                        <button className="btn" onClick={
                                            () => 
                                            {
                                                deleteUserById(currentUser._id);
                                            }
                                        }>Delete</button></td>
                                </tr>
                            )
                             
                        })}
                    </tbody>
                </table>
            </div>

            </section>
            )
        }
            
            <Outlet />
        </>
    )
}