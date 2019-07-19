import React, { Component } from 'react';
import {changeInput,loginSubmit} from "../ActionCreators/loginAC";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../Components/Foooter";
function Login(props){
  if(props.isLoggedIn){
    props.history.replace("/home");
  }
    const handleInputChange=e=>{
        props.dispatch(changeInput(e.target.name,e.target.value));
        }
      const handleSubmit =e=> {
       e.preventDefault();
       
        props.dispatch(loginSubmit(props.email,props.password));
       
      }
    return(
        <>
{/* <h1>Login App</h1> */}
<div className="card alignCenter loginCard">
  <div className="card-header">Login</div>
  <div className="card-body">
  <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label >Email</label>
        <input type ="email" name="email" className="form-control" placeholder="Enter your Email" onChange={handleInputChange}/>
    </div>
    <div className="form-group">
    <label >Password</label>
        <input type ="Password" name="password" className="form-control" placeholder="Enter your Password" onChange={handleInputChange}/>
        
    </div>
        
       <input type="submit" value="submit" className="btn btn-success active" />
        <div style={{paddingTop:"20px"}}><u><Link to="/signup">Dont Have an account ? Sign UP</Link></u></div>
      </form>
      
  </div> 

</div>
<Footer />
      </>
    );
}
function mapStateToProps(state){
    return{
      isLoggedIn:state.loginReducer.isLoggedIn,
      email:state.loginReducer.email,
      password:state.loginReducer.password
    }
  }
  
  export default connect(mapStateToProps)(Login);