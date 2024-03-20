import React from "react";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import  {ButtonVM, invertTheme, theme} from "../estilos/theme";
import { CenterInfo } from "../estilos/Button";
const Home= ()=>{
    return(
        <CenterInfo>
      <ThemeProvider theme={theme}>
      <>
      <h2>Bienvenido</h2>
      <p>Somos una tienda online</p>
      <ThemeProvider theme={invertTheme}>
      </ThemeProvider>
      <Link to="search-page"><ButtonVM>Ver más</ButtonVM></Link>
      </>
      </ThemeProvider>
      </CenterInfo>
    )
  }  
export default Home;