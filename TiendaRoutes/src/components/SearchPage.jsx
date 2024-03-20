import React from "react";
import { Link } from "react-router-dom";
import { CenterInfo, BtnLink } from "../estilos/Button";
const SearchPage= ()=> 
{
  const celulares= [
    "Samsung",
    "LG",
    "Xiaomi",
    "iPhone"
  ]
 return(
  <CenterInfo>
    <h2>Pagina de Busquedas</h2>
    {celulares.map(celular=>(
     
        <li key={celular}><Link to={`/celulares/${celular}`}><BtnLink>
  {celular}</BtnLink></Link></li>
   
    ))}
  </CenterInfo>
 )
};

export default SearchPage;