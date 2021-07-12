import React from "react";

//ANIAMTION
import { motion } from "framer-motion";
import { pageAnimation, titleAni } from "./aniamtion";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "white" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAni}>Get in touch</motion.h2>
        </Hide>
      </Title>

      <div>
        <Social variants={titleAni}>
          <Circle />
          <h2> Send us a Message</h2>
        </Social>

        <Social variants={titleAni}>
          <Circle />
          <h2> send an Email</h2>
        </Social>

        <Social variants={titleAni}>
          <Circle />
          <h2> Social Media</h2>
        </Social>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: blue;
  min-height: 90vh;

  @media (max-width: 1300px) {
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: green;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin:2rem;

  }

  @media (max-width: 1300px) {
    

    h2{
        font-size: 1.2rem;
        margin: 1.2rem;
    }
  }
`;

export default ContactUs;
