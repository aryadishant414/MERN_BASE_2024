import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaCircleUser, FaMessage } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/Auth.jsx";



export const AdminLayout = () => {
    const {user} = useAuth();
    console.log("Admin Layout : ", user);

    const {isLoading} = useAuth();
    

    if(isLoading) {
        return <h1>Loading ...</h1>
    }
    
    if(!user.isAdmin) {
        return <Navigate to ="/" />;
    }

    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li> <NavLink to="/admin/users"> <FaCircleUser /> Users</NavLink> </li>
                            <li><NavLink to="/admin/contacts"> <FaMessage /> Contacts</NavLink> </li>
                            <li><NavLink to="/service">Services</NavLink> </li>
                            <li><NavLink to="/"> <FaHome /> Home</NavLink> </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />

        </>
    )
}