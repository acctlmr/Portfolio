import faqs from "./data";
import FAQ from "./FAQ";
import "./faqs.css";

const FAQs = () =>{
    return(
        <>
        <section id="faqs">
            <h2> Frequently asked questions</h2>
            <p>
                Here are some questions I usually get.Click  to toggle the answer,and if you still have more questions, message me from the contact section!
            </p>
            <div className="container faqs_container">
    {faqs.map(faq=> (
    <FAQ key={faq.id} faq={faq}/>
    ))}
            </div>
        </section>
        </>
    )
}

export default FAQs;