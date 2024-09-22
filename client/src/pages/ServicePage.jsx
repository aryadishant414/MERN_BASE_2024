import { useAuth } from "../store/Auth.jsx"

export const ServicePage = () => {

    const {service} = useAuth();

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>


            
            <div className="container grid grid-three-cols"> 
            {/* below code is for a single card */}
            {
                service.map((currElement, index) => (

                    <div className="card" key={index}>
                        <div className="card-img">
                                <img src="/images/design.png" alt="our services info" width="200" />
                        </div>

                        <div className="card-details">
                            <div className="grid grid-two-cols">
                                    <p>{currElement.provider}</p>
                                    <p>{currElement.price}</p>
                            </div>
                            <h2>{currElement.service}</h2>
                            <p>{currElement.description}</p>
                        </div>
                    </div>
                    
                ))
            }
            </div>

            

        </section>
    )
}