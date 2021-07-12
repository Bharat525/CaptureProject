// IMPORTS

import React from "react";
import homeImg from "../img/homeImg.png";

// styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

//IMPORT FRAME MOTION ANIAMTION
import { motion } from "framer-motion";
import { titleAni , fade , PhotoAni} from "../pages/aniamtion";
import Wave from "./Wave";

//ABOUTSECTION COMPONENTS
const AboutSection = () => {
  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 2 } },
  // };

  // const containerAni = {
  //   hidden: { x: 100 },
  //   show: { x: 0, transition: { duration: 0.75, ease: "easeOut" , staggerchildren : 1, when:"beforeChildren"} },
  // };

  return (
    <About>
      <Description>
        <motion.div  initial = "hidden" animate = "show">
          <Hide>
            <motion.h2 variants={titleAni}>
              We Work to make
            </motion.h2>
          </Hide>

          <motion.h2 variants ={titleAni}>
            <h2>
              your <span>Dreams</span>come
            </h2>
          </motion.h2>

          <motion.h2 variants ={titleAni}>
            <h2>true.</h2>
          </motion.h2>


        </motion.div>

          <motion.p variants = {fade}>
          Contact us for any Photography or vidioGraphy idea that you have. We
          have professionals with amazing skills to help you achive it{" "}
          </motion.p>

        <motion.button variants = {fade}>Contact Us</motion.button>
      </Description>

      <Image>
        <motion.img variants = {PhotoAni} src={homeImg} alt="Person" />
      </Image>
      <Wave/>

    </About>
  );
};

// STYLE COMPONENTS






export default AboutSection;
