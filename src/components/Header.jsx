import React from 'react';
import logoDos from '../img/logo_00.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <div className='nav'>
          <div className='logoHeader'>
          <Link to="/"><img src={logoDos} alt="logoDos" className="logoDos"/></Link>
          </div>
          <div className='buttonsHeader'>          
            <Link to="/waiter"><button className="waiter-button-header">Mesas</button></Link>
            <Link to="/kitchen"><button className="kitchen-button-header">Cocina</button></Link>
            <Link to="/"><button className="home-button-header">Inicio</button></Link>
          </div>        
        </div>
  
    </>
  );
}

export default Header;