import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
export default function Footer(){
  var footerStyle = {
    bottom:0
  };
    return (
<footer className="container font-small blue pt-4 align-items-end" style={footerStyle}>

  <div className="container text-center text-md-left">

    <div className="row">

      <div className="col-md-6 mt-md-0 mt-3">

        <h5 >Chocolate Collection by <b className="text-uppercase">Qvantel</b></h5>
        <p>Chocolate Collection is a list of Chocolate brands and Chocolate lists</p>

      </div>

    

      <div className="col-md-6 mb-md-0 ">

        <ul className="list-unstyled" style={{color:"white"}}>
          <li>
          <NavLink to="/home"><b>Home</b></NavLink>
            {/* <a href="#!">Link 1</a> */}
          </li>
          <li>
          <NavLink to="/brands"><b>Brands</b></NavLink>
          </li>
          <li>
          <NavLink to="/chocolates"><b>Chocolates</b></NavLink>
          </li>
        </ul>

      </div>

      {/* <div className="col-md-3 mb-md-0 mb-3">

        

        <ul className="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
        </ul>

      </div> */}

    </div>
   

  </div>
 
</footer>

    )
}