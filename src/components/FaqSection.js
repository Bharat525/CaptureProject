import react, { useState } from "react";

//IMPORT STYLE COMPOENTS
import styled from "styled-components";
import { About } from "../styles";

import Toggle from "./toggle";

const FaqSection = () => {
  //HERE OUR STATE
  const [faqToggle, setFaqToggle] = useState(false);

  return (
    <Faq>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>

      {/* //HERE WE WRAP TOGGLE WITH FAQ QUESTION */}
      <Toggle tittle="How do i start ?">
        <div className="question">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              corrupti.
            </p>

            <p>lorem20</p>
          </div>

          
        </div>
      </Toggle>

      <Toggle tittle="Daily schedule">
        <div className="question">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              corrupti.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
              ab.
            </p>
          </div>
        </div>
      </Toggle>

      <Toggle tittle="What products do you offers ?">
        <div className="question">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              corrupti.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
              ab.
            </p>
          </div>
        </div>
      </Toggle>

      <Toggle tittle = "Diffrent Payment Methods">
        <div className="question">
          

          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              corrupti.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
              ab.
            </p>
          </div>
          
        </div>
      </Toggle>
    </Faq>
  );
};

// STYLE COMPONENTS

const Faq = styled(About)`
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
  }

  .question {
    padding: 1rem 0rem;
    cursor: pointer;
    width : 100%;
  
  }

  .answer {
    border: 1px solid black;
    padding: 2rem 0rem {
      padding: 0rem 1rem;
    }

    .faq-line {
      background-color: blue;
      width: 100%;
      height: 20px;
    }
  }
`;

export default FaqSection;
