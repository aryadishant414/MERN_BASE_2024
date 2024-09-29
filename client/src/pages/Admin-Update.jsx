import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/Auth.jsx";


export const AdminUpdate = () => {
    const[data, setData] = useState({
        username: "",
        email: "",
        phone: ""
    });

    const {userAuthorization} = useAuth();

    const params = useParams();
    console.log("INSIDE USE PARAMS IN ADMIN-UPDATE : ", params);


    // get single user ka data jisse update form mai wo data fill ho jaae
    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/admin/users/${params.id}`, {
            method:"GET",
            headers: {
                Authorization : userAuthorization
            }
            })
            console.log("INSIDE ADMIN-UPDATE Response : ", response);
            
            const singleUserData = await response.json();
            console.log("SINGLE USER KAA DATA INSIDE ADMIN-UPDATE IS : ", singleUserData);
            

            if(response.ok) {
                setData({
                    username: singleUserData.username,
                    email: singleUserData.email,
                    phone: singleUserData.phone
                });
            }

            console.log("INSIDE DATA in ADMIN-UPDATE : ", data);

        } catch (error) {
            console.log("ERROR while getting single user data");
            
        }
    }

    useEffect(()=> {
        getSingleUserData();
    }, [])

    const handleInput = (e) => {
        // console.log("Register page INPUT HAS BEEN CHNAGED : " , e); // just to check
        let name = e.target.name;
        let value = e.target.value;
    
        setData({
          ...data,
          [name]: value,
        });
    };
    
    // handle form on submit
    const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        // console.log("Updated user details are : " , user);
    
        // sending user data to Database
        const response = await fetch(`http://localhost:8000/api/v1/admin/users/update/${params.id}`, {
            method: "PATCH",
            headers: {
                Authorization: userAuthorization,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
        );
        console.log("Update Response is : ", response);


        // client requested server responsed data
        const user_data = await response.json(response);
        console.log("Updated Server responsed data is : ", user_data);
        
            // alert(user_data.message);
        if(response.ok) {
            toast.success("Updated Successfully");
        }else {
            toast.error("Update Failed");
        }    
                

    } catch (error) {
        console.log("Error in user Update",error);
    }
    

    };



    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image reg-img">
                                <img
                                src="/images/login.png"
                                alt="let's fill the login form"
                                width="400"
                                height="500"
                                />
                            </div>
                            {/* our main registration code  */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Update User data</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input
                                        type="text"
                                        name="username"
                                        value={data.username}
                                        onChange={handleInput}
                                        placeholder="enter your username"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                        type="text"
                                        name="email"
                                        value={data.email}
                                        onChange={handleInput}
                                        placeholder="enter your email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input
                                        type="number"
                                        name="phone"
                                        value={data.phone}
                                        onChange={handleInput}
                                        placeholder="enter your phone"
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}


