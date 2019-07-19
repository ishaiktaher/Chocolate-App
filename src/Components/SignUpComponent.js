import React from "react";
import { connect } from "react-redux";
import {changeInput,signUpSubmit} from "../ActionCreators/SignUpAC";
import { Link, Redirect } from "react-router-dom";
import Footer from "./Foooter";
function SignUpComponent(props){
    const handleSubmit =e=> {
        e.preventDefault();
        if(props.password !== props.confirmPassword){
            alert("Your passwords does not match!! Please re-Enter!!");
            return;
        }
         props.dispatch(signUpSubmit(props));
       };

   return(
<>
<div className="card alignCenter loginCard">
<div className="card-header">Sign Up</div>
<div className="card-body">
  <div className="container">
  <form onSubmit={handleSubmit}>
    
    

      <div>
    <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="Enter your First Name"
            required
            onChange={e => {
              props.dispatch(changeInput("firstName", e.target.value));
            }}
          />
          </div>
          <div>
<label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Last Name"
            onChange={e => {
              props.dispatch(changeInput("lastName", e.target.value));
            }}
          />
    </div>
    <div className="form-group">
    <label >Email</label>
        <input type ="email" name="email" className="form-control" placeholder="Enter your Email" onChange={e => {
              props.dispatch(changeInput("email", e.target.value));
            }}/>
    </div>
    <div className="form-group">
    <label >Password</label>
        <input type ="Password" name="password" required className="form-control" placeholder="Enter your Password" onChange={e => {
              props.dispatch(changeInput("password", e.target.value));
            }}/>
        
    </div>
    <div className="form-group">
    <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Re-Type Password"
            className="form-control"
            name="confirmPassword"
            required
            onChange={e => {
              props.dispatch(
                changeInput("confirmPassword", e.target.value)
              );
            }}
          />
    </div>
        
      <input type="submit" value="submit" className="btn btn-success active" />
      <div style={{paddingTop:"20px"}}><u><Link to="/login">Already Have an account ? Login</Link></u></div>
      
      </form>
      
      </div>
  </div> 
  </div>
  <Footer />
  {props.isSignedUp && <Redirect to="/login" />}

</>
    );
}

function mapStateToProps(state){
  console.log("Sign Up state update :: "+state.signUpReducer.isSignedUp);
   return{
    firstName:state.signUpReducer.firstName,
    lastName:state.signUpReducer.lastName,
    email:state.signUpReducer.email,
    password: state.signUpReducer.password,
    confirmPassword: state.signUpReducer.confirmPassword,
    isLoading: state.signUpReducer.isLoading,
    isSignedUp:state.signUpReducer.isSignedUp
}
}


export default connect(mapStateToProps)(SignUpComponent);
