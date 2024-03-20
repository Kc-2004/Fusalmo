import React from "react";
import "./App.css";
import {Header, CenteredCont,} from "./estilos/Button";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import Celulares from "./components/Celulares";
import Celulardetails from "./components/Celulardetails";
import NavLink from "./components/NavLink";
 function App(){
 
  return  (
      <div>
         <Header>
    <h1>LOGO</h1>
  <nav id="navbar">
    <ul>
      <li>
        <NavLink to="/search-page">Pagina de Busqueda</NavLink>
      </li>
      <li>
  <NavLink to="/">Home</NavLink>
    </li>
    </ul>
  </nav>
  </Header>
  <div className="features">
  <CenteredCont>
     <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/search-page" element={<SearchPage/>}/>
     
      <Route path="/celulares/:nameCelular" element={<Celulares/>}>
        <Route path="details" element={<Celulardetails/> }/>
    </Route>
    <Route path="*" element={<h1>Page Not Found</h1>}/>
     </Routes>
      </CenteredCont>
      </div>
      </div> 
    )
};

export default App;