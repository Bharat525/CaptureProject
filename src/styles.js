// IMPORT STYLED COMPONENTS
import styled from "styled-components";
import {motion} from "framer-motion"

// STYLE COMPONENTS
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5rem;
  color: white;

  @media(max-width : 1300px){
      display:block;
      align-items:center;
      text-align:center;

  }
`;

export const Description = styled.div`
  z-index: 2;
  flex: 1;
  padding: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  padding-top : 2rem;
  overflow: hidden;
  z-index: 2;
  flex: 1;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
