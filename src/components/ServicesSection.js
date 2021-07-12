import React from "react";
// import icons
import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

// IMPORT STYLED COMPONENTS
import styled from "styled-components";
import { About, Description, Image } from "../styles";

//Text
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { fade } from "../pages/aniamtion";

const ServiceSection = () => {
  const controls = useAnimation();
  const [element, view] = useInView({threshold : 0.5});
  // console.log(view);


  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return (
    <Services >
      <Description aniamte = {controls} initial = "hidden" variants = {fade} ref = {element}>
        <h2>
          High <span> Quality</span>services
        </h2>

        <MainbaseDiv>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="clock icon" />
                <h3>Efficient</h3>
              </div>

              <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
              <div className="icon">
                <img src={diaphragm} alt="Diaphragm icon" />
                <h3>Diaphragm</h3>
              </div>

              <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
              <div className="icon">
                <img src={money} alt="Money Icon" />
                <h3>Affordable</h3>
              </div>

              <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
              <div className="icon">
                <img src={teamwork} alt="Teamwork Icon" />
                <h3>Teamwork</h3>
              </div>

              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>

          <Image>
            <img src={home2} alt="Camera" />
          </Image>
        </MainbaseDiv>
      </Description>
    </Services>
  );
};

//STYLE COMPONENTS
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 80%;
    border: 1px solid black;
  }
`;

const MainbaseDiv = styled.div`
  display: flex !important ;
  justify-content : space-around;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20%;
`;

const Card = styled.div`
  flex-basis: 20rem;
  width: 20%;
  border: 1px solid black;

  .icon {
    display: flex;
    margin: 2px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
  }
`;

export default ServiceSection;
