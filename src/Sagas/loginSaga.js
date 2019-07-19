import { takeLatest, put } from "redux-saga/effects";
import {
    loginSubmitSuccess,
    loginSubmitFailure
} from "../ActionCreators/loginAC";
import { LOGIN_SUBMIT } from "../ActionTypes/loginAT";

function* getUser({email,password}) {
  try {
  
    let userResponse = yield fetch(`http://localhost:4000/users/?email=${email}`);
    var [users] = yield userResponse.json();

    if(users!==undefined){
    if(users!==undefined && users.password===password){
    //alert("You are now logged in");
    users.isLoggedin=true;
//window.location="http://localhost:3000/home";
    yield put(loginSubmitSuccess(users));
    }else if(users.password!==password){

      yield put(loginSubmitFailure("Please Enter Correct Password"));
      alert("Please Enter Correct Password");
    }
  }else{
    alert("We didn't find your mail Id in our records!!. Please ensure you signUP before login or enter correct EmailId");
   const error="Log In failed"
    yield put(loginSubmitFailure(error));
  }

    yield put(loginSubmitSuccess(users));
  } catch (err) {
    //yield put(loginSubmitFailure(err));
  }
}


export default function* loginSaga(){
  yield takeLatest(LOGIN_SUBMIT, getUser);
}