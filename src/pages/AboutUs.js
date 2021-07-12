import React from "react";

//page components

import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";


//ANIAMTION
import { motion } from "framer-motion";
import { pageAnimation } from "./aniamtion";





const AboutUs = () =>{


    return(
        <motion.div exit = "exit" variants = {pageAnimation} initial = "hidden" animate = "show">        
        <AboutSection/>
        <ServiceSection/>
        <FaqSection/>
       </motion.div>
        
    )
}


export default AboutUs