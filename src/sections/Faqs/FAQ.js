import { useState } from "react";
import Card from "../../components/Card";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
const FAQ = ({faq})=>{
    const [showAnswer, setShowAnswer]= useState(false);
    const togglebutton = () =>{
        console.log("clicked");
        setShowAnswer(!showAnswer);
    }
    return(
        <>
        <Card className = "faq" onClick = {togglebutton}>
            <div>
                <h5 className="faq_question">{faq.question}</h5>
                <button className="faq_icon">
              {showAnswer? <AiOutlineMinus/> :<AiOutlinePlus/>}      
                    </button>
                    </div>
                    {showAnswer && (<p className="faq_answer">{faq.answer}</p>)}
        
         </Card>
        </>
    )
}

export default FAQ;