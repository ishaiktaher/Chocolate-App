import React from 'react'
import {Link, NavLink,Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import {changeInput} from "../ActionCreators/loginAC";
function NavBar(props){
    return(
      <>
        <div>
            <nav className="navbar navbar-expand-sm " style={{background: "#3d1010"}}>
  
  <NavLink to="/" href="" className="navbar-brand" style={{color:"yellow",fontFamily:"sofia"}}>Chocolate Collection </NavLink>

  <ul className="navbar-nav mr-auto mb-0 mt-0">
  <li className="nav-item">
     <NavLink to="/home" href="" className="nav-link" activeStyle={{borderBottom
      :"1px solid yellow"}}>Home </NavLink>
    </li>
      <li className="nav-item">
      <NavLink to="/brands" href="" className="nav-link" activeStyle={{borderBottom
      :"1px solid yellow"}}>Brands </NavLink>
    </li>
    <li className="nav-item">
    <NavLink to="/chocolates" href="" className="nav-link" activeStyle={{borderBottom
      :"1px solid yellow"}}>Chocolates </NavLink>
    </li>   
  </ul>
  <ul className="mb-0 mt-0">
  < li style={{listStyle:"none"}}>
      {/* {!props.isLoggedIn && <>
        <NavLink to="/login" hre="" className="nav-link">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
      </NavLink>
       </>} */}
       {props.isLoggedIn && <>
  {/* <div > */}
  <form className="form-inline">
    <Link to="/chocolates">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={e => {
              props.dispatch(changeInput("searchKey", e.target.value));
            }}
            />
      {/* <button className="btn my-2 my-sm-0" type="button" onClick={()=>{return <Login />}}
      style={{color:"aliceblue",border:"1px solid khaki"}}
      >Search</button> */}
    
    </Link>
    <button className="btn btn-outline-success my-2 my-sm-0 ml-2" onClick={(e)=>{
        props.dispatch({ type: "LogOut"})
      }} type="submit"
      style={{color:"aliceblue",border:"1px solid khaki"}}
      >Logout</button>
    </form>
    
   {/* </div> */}
    </>}

      </li>
  </ul>
 
    
</nav>
        </div>
        <div className="container" style={{paddingBottom:"10px"}}>

        <header className="topHeader">
          <div className="text-center topHeaderHeading" style={{fontFamily:"sofia"}}>Chocolate</div>
        <div className="text-center topHeaderContent">
            Chocolate is the answer , Who cares what the Question is!!!
        </div>
    </header>

        </div>
        
     {!(props.isLoggedIn) && <Redirect to="/login" />}
    </>
    );
        
    
}

function mapStateToProps(state){
  return{
    isLoggedIn:state.loginReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(NavBar)