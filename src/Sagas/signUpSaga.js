import { put ,takeLatest} from "redux-saga/effects";
import {signUpSubmitSuccess,signUpSubmitFailre} from "../ActionCreators/SignUpAC";

import {SIGNUP_SUBMIT} from "../ActionTypes/SignUpAT";
 function* signUpSubmit(action) {
  try {
    
     const { firstName, lastName, email, password } = action.data;

     let userResponse = yield fetch(`http://localhost:4000/users/?email=${email}`);

     let [users] = yield userResponse.json();
   
     if(users!==undefined){
        alert("Users Exists!! Please Login");
        yield put(signUpSubmitSuccess(true));
     }else{
        const body = { firstName, lastName, email, password };
         const signUpUser = yield fetch("http://localhost:4000/users", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
           }
          });
      const signUpUserResult = yield signUpUser.json();
      if(signUpUserResult.id!==""||signUpUserResult.id!== null){
        alert("User Registration Successfull!! Please login");
        yield put(signUpSubmitSuccess(signUpUserResult));
        }
      }
  
  } catch (err) {
    yield put(signUpSubmitFailre(err));
   console.error(err);
  }
}


export default function* signUpSaga(){
  yield takeLatest(SIGNUP_SUBMIT, signUpSubmit);
}
