import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth.jsx";
import {toast } from 'react-toastify';

export const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();
    const {storeTokenInLocalStorage} = useAuth();

    const handleInput = (e) => {
        // console.log("Login Page INPUT has been changed", e);
        let name = e.target.name;
        let value = e.target.value;

        setUser(
            {
            ...user,
            [name] : value,
            }
        );
    }

    const handleSubmit = async (e) => {
       try {
         e.preventDefault();
         // console.log("Form has been Submitted", user);

         let response = await fetch("http://localhost:8000/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
         });

         console.log("Login user Response is : ", response);

         const res_data = await response.json(response);
         console.log("Login Responsed data from server in JSON format is : ", res_data);

         
         // lets empty the state variable
        if(response.ok) {
            // alert(res_data.message);
            toast.success(res_data.message);


            // storing server responsed "token" to our "localStorage"
            storeTokenInLocalStorage(res_data.token); 
            
            setUser({
                email: "",
                password: "",
            });
            navigate("/");  
        }
        else {
            // alert(res_data.extraDetails ? res_data.extraDetails : "Login Failed");
            toast.error(res_data.extraDetails ? res_data.extraDetails : "Login Failed");
            // setUser({
            //     email: "",
            //     password: "",
            // });
        }
         
       } catch (error) {
            console.log("Error in User Login : ", error);
            
       }
        
    }

    return (
        <>
           <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image reg-img">
                                <img
                                src="/images/register.png"
                                alt="a nurse with a cute look"
                                width="400"
                                height="500"
                                />
                            </div>
                            {/* our main registration code  */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Login form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
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
                                        Login Now
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