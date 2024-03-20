import styled from "styled-components";
import { colors } from "./theme";

 export const Button= styled.button`
    background: #DFF5FF;
    border-radius: 3px;
    border: 2px solid ${colors.rosado}; 
    color: ${colors.danger};
    font-size: 0.9rem;
    margin: 0 auto;
    padding: 0.25em 1em;
    cursor: pointer;
    margin-bottom: 0.9em;

`; 
export const Header= styled.header`
    display: flex;
    background-color: #333;
    color: white;
    flex-direction: row;
    align-content: center;
    padding: 5px;
    justify-content: space-between;
`;

export const BtnLink= styled.button`
background-color: turquoise;
padding: 0.2em;
border-radius: 5px;
border: 0px;
margin-bottom: 3em;
padding: 3em;
margin-left: 10%;
display:block;
float: left;
`;
export const DetailsConst= styled.div`
background-color: #38acb4;
margin-top: 1em;
padding: 5%;
text-align: center;
width: 500px;
border-radius: 10px;
margin-left: 200px;
h3,h4{
color: black;
}

`;

export const CenteredCont=styled.div`
background-color: #1f1d1d;
width: 80%;
margin:0 auto;
height: 100vh;
`;

export const CenterInfo=styled.div`
justify-content: center;
text-align: center;
`;