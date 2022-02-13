import React from 'react';
import logo from '../../img/logo.png';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="buttons-menu">
        <img src={logo} alt="logo" class="logo"/>
        <Link to="/waiter"><button className="waiter-button">Tomar pedido</button></Link>
        <Link to="/kitchen"><button className="kitchen-button">Cocina</button></Link>
      </div>
    </>
  );
};

export default Home;