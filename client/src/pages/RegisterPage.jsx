import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/Auth.jsx";

export const RegisterPage = () => {
    const[user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();
    const {storeTokenInLocalStorage} = useAuth();

    const handleInput = (e) => {
        // console.log("Register page INPUT HAS BEEN CHNAGED : " , e); // just to check
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]: value,
        });
    };
    
    // handle form on submit
    const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        console.log("Registered user details are : " , user);
    
        // sending user data to Database
        const response = await fetch("http://localhost:8000/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        console.log("Register Response is : ", response);


        // client requested server responsed data
        const user_data = await response.json(response);
        console.log("Register page Server responsed data is : ", user_data);
        
        // lets empty the state variable
        if(response.ok) {
    
            // storing server responsed "token" on our "localStorage"
            storeTokenInLocalStorage(user_data.token);
            
            
            setUser({
                username: "",
                email: "",
                phone: "",
                password: "",
            });

            alert(user_data.message);

            navigate("/login");
                
        }else {
            alert(user_data.extraDetails? user_data.extraDetails : user_data.message);
        }

    } catch (error) {
        console.log("Error in user Registration",error);
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
                                <h1 className="main-heading mb-3">Registration Form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input
                                        type="text"
                                        name="username"
                                        value={user.username}
                                        onChange={handleInput}
                                        placeholder="enter your username"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                        type="text"
                                        name="email"
                                        value={user.email}
                                        onChange={handleInput}
                                        placeholder="enter your email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input
                                        type="number"
                                        name="phone"
                                        value={user.phone}
                                        onChange={handleInput}
                                        placeholder="enter your phone"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input
                                        type="password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleInput}
                                        placeholder="enter your password"
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">
                                        Register Now
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