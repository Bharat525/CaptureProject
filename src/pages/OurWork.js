//IMPORT
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";


//ANIAMTION
import { motion } from "framer-motion";
import {slider,  pageAnimation, fade, PhotoAni , lineAni , sliderContainer } from "./aniamtion";




const OurWork = () => {
  return (
    <Work  exit = "exit" variants = {pageAnimation} initial = "hidden" animate = "show" >
      

      <motion.div variants = {sliderContainer}>
    <Frame1 variants = {slider}></Frame1>
    <Frame2 variants = {slider}></Frame2>
    <Frame3 variants = {slider}></Frame3>
    <Frame4 variants = {slider}></Frame4>
    </motion.div>
      
      <Movie>
        <motion.h2 variants = {fade}>The athlete</motion.h2>

        <motion.div variants = {lineAni}  className="line"></motion.div>
        <Link to = "/work/the-athlete">

          <Hide>
          <motion.img variants = {PhotoAni} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <Movie>
        <h2>The Racer</h2>

        <motion.div variants = {lineAni}  className="line"></motion.div>
        <Link to = "/work/the-racer">
        <Hide>
          <img src={theracer} alt="theracer" />
          </Hide>
        </Link>
      </Movie>

      <Movie variants = {fade} >
        <h2>Good Times</h2>

        <motion.div variants = {lineAni}  className="line"></motion.div>
        <Link to = "/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>

      
    </Work>
  );
};

// STYLED COMPONENTS
const Work = styled(motion.div)`
  min-height: 100vh;
  border: 1px solid white;
  padding: 5rem 12rem;
  overflow: hidden;

  @media(max-width:1300px){

 padding: 2rem 2rem;


  }

  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background-color: #5c3c92;
    margin-bottom: 3rem;

  }

  img {
    width: 100%;
    height: 70vh;
  }
`;


const Hide = styled.div`
overflow: hidden;


`;


//FRAME ANIAMTION
const Frame1 = styled(motion.div)`
  position : fixed;
  left: 0;
  background-color: red;
  width :100%;
  height: 100vh;
  z-index : 2;
  top: 10%;

`;

const Frame2 = styled(Frame1)`  
  background-color : black;
`;

const Frame3 = styled(Frame1)`
  background-color : white;

`;


const Frame4 = styled(Frame1)`
  background-color : green;

`;

const SliderContainer = styled.div`

`




export default OurWork;
