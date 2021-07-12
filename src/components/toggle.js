import React, {useState}from "react"
import { motion } from "framer-motion"

// HERE OUR TOGGLE STATE 

const Toggle = ({children , tittle}) =>{
    

//    console.log(children)
    
    const [toggle , setToggle] = useState(false)


    return (
        
        <motion.div layout classname = "question" onClick = {() => setToggle(!toggle)}>

            <motion.h4 > {tittle} </motion.h4>
            {toggle ? children : ''}

            <div  lassname="faq-line"></div>



        </motion.div>



    )


}

export default Toggle
