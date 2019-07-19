import loginReducer from "./loginReducer";
import signUpReducer from "./SignUpReducer";
import brandsReducer from "./BrandReducer";
import {combineReducers} from "redux";
import chocolatesReducer from "../Reducers/ChocolatesReducer";

// const signUpReducerState = {firstName:"",lastName:"",password:"" ,confirmpassword:"",email:"",isLoading:false};
// const loginReducerState = {password:"" ,email:"",isLoading:false}

// function rootReducer1(prevState = {loginReducerState,signUpReducerState},action){
//   return produce(prevState,draft=>{
//       switch(action.type){
//           case CHANGE_INPUT:
//               draft[action.fieldName]=action.fieldValue;
//               break;

//           //login
//           case LOGIN_SUBMIT:
//               draft.isLoading=true;
//               break;
//          case LOGIN_SUBMIT_SUCCESS:
//                  draft.isLoading=false;
//                  draft.response =action.response;
//                   break;
//          case LOGIN_SUBMIT_FAILURE:
//                  draft.isLoading=false;
//                  draft.error=action.error;
//                  alert("Unable to Connect,Please try again Later");
//                   break;
//         //signup
//         case CHANGE_SIGNUP_INPUT:
//                     console.log(draft , draft[action.fieldName],action.fieldValue);
//                     draft[action.fieldName]=action.fieldValue;
//                 break;
//         case SIGNUP_SUBMIT:
//                     draft.isLoading=false;
//                     break; 
//       }
 
//   })
 
//  };


  const rootReducer =combineReducers({
loginReducer,
signUpReducer,
brandsReducer,
chocolatesReducer
  });
  export default rootReducer;