// IMPORTS
import styled from "styled-components";
import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {useLocation} from "react-router-dom"

const Nav = () => {
    const {pathname} = useLocation(); 

  return (
    <StyledNav>
      <div className="nav-overlay">
        <h1 id="logo">
          <Link to="/">Capture </Link>
          
        </h1>

        <ul>
          <li>
            <Link to="/">About Us </Link>
            <Line transition = {{duration : 0.75}} initial = {{width : "0"}} animate = {{width : pathname === "/" ?  "50%" : "0" }}/>
          </li>
          <li>
            <Link to="/work"> Our Work</Link>
            <Line transition = {{duration : 0.75}} initial = {{width : "0"}} animate = {{width : pathname === "/work" ?  "50%" : "0" }}/>
          
          </li>

          <li>
            <Link to="/contact"> Contact Us</Link>
            <Line transition = {{duration : 0.75}} initial = {{width : "0"}} animate = {{width : pathname === "/contact" ?  "50%" : "0" }}/>
         
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

//STYLED COMPONENTS

const StyledNav = styled.nav`
position : fixed;
z-index : 99;
  width: 100%;
  min-height: 10vh;
  background-color: white;
  display: flex;
  justify-content: space-around;

  ul {
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 30%;

    list-style: none;
  }

  li {
    /* border: 1px solid black; */
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

    @media(max-width : 1300px){
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      .nav-overlay{
        align-items:center;
        
        flex-direction:column;
        justify-content:space-around;
      }



      ul{
        width:100%;
        justify-content: space-around;
      }

        #logo{
          display: inline-block;
          margin: 1rem;
        }
     

    }

  a {
    color: black;
    text-decoration: none;
  }

  #logo {
    font-family: "lobster", cursive;
  }

  .nav-overlay {
    width: 75%;
    padding: 10px;
    /* border:1px solid black; */
    display: flex;
    justify-content: space-between;
    margin: auto;
  }




`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background-color : blue;
    width : 0%;
    position :absolute;
    bottom : -80%;
   
`;


export default Nav;
