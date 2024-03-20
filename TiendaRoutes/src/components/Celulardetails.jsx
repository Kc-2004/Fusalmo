import React from "react";
import { DetailsConst} from "../estilos/Button";    
import { useParams } from "react-router-dom";
import dataCel from "../data/dataCel";
//Componentes para los detalles de celular
const Celulardetails= ()=>{
    const {nameCelular}=useParams();
    const detalles= dataCel[nameCelular];
   return(
     <DetailsConst>
     <h1>Detalle del movil {nameCelular}</h1>
     <h4>Modelo: {detalles.modelo}</h4>
     <h4>  Precio: {detalles.precio}</h4>
     <h4>Descripción: {detalles.desc}</h4>
     </DetailsConst>
   
    )
   };
   
export default Celulardetails;