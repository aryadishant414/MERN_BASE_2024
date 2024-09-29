import { useEffect, useState } from "react";
import { useAuth } from "../store/Auth.jsx";


export const AdminContacts = () => {

    const {userAuthorization} = useAuth();
    const [contacts, setContacts] = useState([]);

    const showAllContacts = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/admin/contacts",{
                method:"GET",
                headers: {
                    Authorization: userAuthorization
                }
            })
    
            const data = await response.json();
            console.log("DATA inside Response of Fetching all contacts from backend is : ", data);
            
            setContacts(data);
    
            console.log("DATA INSIDE CONTACTS in Admin-Contacts IS : ", contacts);
            
    
        } catch (error) {
            console.log("ERROR while fetching all contacts in frontend", error);
            
        }
    }

    const deleteAContact = async (id) => {
        try {
            
            const response = await fetch(`http://localhost:8000/api/v1/admin/contacts/delete/${id}`,{
                method:"DELETE",
                headers: {
                    Authorization: userAuthorization
                }
            })

            if(response.ok) {
                showAllContacts();
            }
        } catch (error) {
            console.log("Error while deleting a Contact in Frontend");
            
        }
        
    }

    useEffect(() => {
        showAllContacts();
    }, []);

   

    return (
        <>
            <section className="admin-contacts-section">
                <h1>Admin Contact Data</h1>

                <div className="container admin-users">
                    {
                    contacts.map((currElement, index)=> {
                        const {name, email, message, _id} = currElement;

                    return(
                        <div key={index}>
                            <p>{name}</p>
                            <p>{email}</p>
                            <p>{message}</p>
                            <button className="btn" onClick={() => {
                                deleteAContact(_id)
                            }}>Delete</button>
                        </div>
                    );

                    })
                    }       
                </div>
            </section>
            

           
        </>
    )
}