import { useState } from "react";

export const RegisterPage = () => {
    const[user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

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
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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