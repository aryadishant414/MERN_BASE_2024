import { useState } from "react"

export const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form has been Submitted", user);
        
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