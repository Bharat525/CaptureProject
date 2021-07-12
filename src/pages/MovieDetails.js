import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { MovieState } from "../movieState";


//ANIMATION
import { motion } from "framer-motion";
import { pageAnimation } from "./aniamtion";

const MovieDetails = () => {
  const History = useHistory();
  const url = History.location.pathname;
  // console.log(url);


  
  // HERE OUR STATE
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  console.log(movies);

  // useEffect
  useEffect(() => {
    const currentMovie = movies.filter((state) => state.url === url);

    setMovie(currentMovie[0]);
  }, [movies, url]);

  //   console.log(movie)

  return (
    <>
      {movie && (
        <Details   exit = "exit" variants = {pageAnimation} initial = "hidden" animate = "show">
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>

          <Awards>
            {movie.awards.map((award) => {

                // console.log(a.description)

               <Award title = {award.title} description = {award.description} key = {award.title} />
             


            })}


          </Awards>

          <ImageDisplay>

                <img src={movie.secondaryImg} alt="" />



          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

// STYLED COMPONENTS
const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  background-color: #c6c6cc;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`

min-height:80vh;
display:flex;
color:white;

`;


const ImageDisplay = styled.div`

  min-height: 50vh;
  img{
    width: 100%;
    height:100vh;

  }



`;


const Award = ({title, description}) => {

    
  return (
    <div>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </div>
  );
};

export default MovieDetails;
