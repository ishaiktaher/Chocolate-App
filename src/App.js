import React from 'react';
import './App.css';
import Login from "./Components/Login";
import Home from  "./Components/Home";
import SignUpComponent from "./Components/SignUpComponent";
import {Route,Switch} from "react-router-dom";
import NavBar from "./Components/NavBar";
import ChocolatesList from "./Components/ChocolatesList";
import Brands from "./Components/Brands";
import BrandDetails from "./Components/BrandDetails";
import ChocolatesDetails from "./Components/ChocolatesDetails";
import {connect} from "react-redux";
function App(props) {
  
  return (
    <>
    <NavBar />
    
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUpComponent} />
        <Route path="/chocolates" exact component={ChocolatesList} />
        <Route path="/chocolates/:id" exact component={ChocolatesDetails} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/brands" exact component={Brands} />
        <Route path="/brands/:id" exact component={BrandDetails} />
      </Switch>
    
      

    </>
  );
  
}
function mapStateToProps(state){
  return{
    isLoggedIn:state.loginReducer.isLoggedIn
  }
}
export default connect(mapStateToProps)(App);
