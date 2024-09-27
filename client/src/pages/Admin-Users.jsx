import { useEffect, useState } from "react";
import { useAuth } from "../store/Auth.jsx";

export const AdminUsers = () => {
    const {userAuthorization} = useAuth();
    const [user, setUser] = useState([]);


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

    useEffect( () => {
        showAllUsers();
    }, []);

    return (
        <>
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
                                    <td>Edit</td>
                                    <td>Delete</td>
                                </tr>
                            )
                             
                        })}
                    </tbody>
                </table>
            </div>

            </section>
            {/* {user.map((currentUser, index) => {
                console.log("CURRENT USER IS : ", currentUser.username);
                return <h1>{currentUser.username}</h1>
            })} */}
            {/* <h1>Welcome to Admin Users</h1> */}
        </>
    )
}