import {CHANGE_INPUT,LOGIN_SUBMIT, LOGIN_SUBMIT_SUCCESS, LOGIN_SUBMIT_FAILURE} from "../ActionTypes/loginAT";
import produce from "immer";
const initialState = {password:"" ,email:"",isLoading:false,isLoggedIn:false,searchKey:""}
export default function loginReducer(prevState = initialState,action){
 return produce(prevState,draft=>{
     switch(action.type){
         case CHANGE_INPUT:
             console.log(action.fieldName,action.fieldValue);
             draft[action.fieldName]=action.fieldValue;
             break;
         case LOGIN_SUBMIT:
             draft.isLoading=true;
             break;
        case LOGIN_SUBMIT_SUCCESS:
                draft.isLoading=false;
                draft.response =action.response;
                draft.isLoggedIn=true;
                 break;
        case LOGIN_SUBMIT_FAILURE:
                draft.isLoading=false;
                draft.error=action.error;
                draft.isLoggedIn=false;
                alert(draft.isLoggedIn);
                 break; 
        case "LogOut":
                     //console.log(draft.isLoggedIn)
                     draft.isLoggedIn=false
                     window.location.hash="/login";
                     break
     }

 })

};