import React from "react";
import {Link, Outlet } from "react-router-dom";
import { theme} from "../estilos/theme";
import { ThemeProvider } from "styled-components";
import { CenterInfo,Button } from "../estilos/Button";

const Celulares = ({nameCelular})=>
{
return(
  <CenterInfo>
    <ThemeProvider theme={theme}>
    <h2>Info de Celulares</h2>
    <h3>{nameCelular}</h3>
    <Link to="details"><Button>Ir a detalles</Button></Link>
    <Outlet />
    </ThemeProvider>
  </CenterInfo>
)
}
export default Celulares;