import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin :0;
    padding: 0;
    box-sizing: border-box;

}

body{
    font-family : 'inter', sans-serif;
    background-color: #181818;
}


//Media qureies

    html{
        @media(max-width: 1700px){
            font-size: 80%;
            
        }

        

    }


button{

    font-weight : bold;
    font-size : 1.2rem;
    padding: 1rem 2rem;
    cursor: pointer;
    background-color:black;
    border: 1px solid green;
    color:white;
    transition:all 0.5s ease;
    font-family : 'inter', sans-serif;
    &:hover{
        background-color:white;
        color:black;
    }
}



h2{
        font-size:3rem;
        padding: 0.2rem 0rem
    }

    h1{
        font-size : 2rem;
    }

    span{
        color: blue;
        
    }
    a{
        font-size: 1.1rem
    }

    p{
        padding :3rem 0rem;
        color: #ccc;
        font-size: 1.4rem
    }


`;

export default GlobalStyle;
