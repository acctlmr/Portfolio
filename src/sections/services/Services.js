import "./services.css";
import Card from "../../components/Card";
import data from "./data";
const Services = () => {
    return (
        <>
            <section id="services">
                <h2>Services</h2>
                <p>I will give you the best in all the services below.</p>
                <div className="container services_container">
                    {
                        data.map(item => (
                            <Card key={item.id} className="service light">
                                <div className="service_icon">{item.icon}</div>
                                <div className="service_details">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                          </Card>
                        ))
                    }

                </div>
            </section>
        </>
    );
}

export default Services;