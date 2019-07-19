import {CHANGE_SIGNUP_INPUT,SIGNUP_SUBMIT,SIGNUP_SUBMIT_SUCCESS,SIGNUP_SUBMIT_FAILURE} from "../ActionTypes/SignUpAT";
import produce from "immer";

const initialState = {firstName:"",lastName:"",password:"" ,confirmpassword:"",email:"",isLoading:false,isLoggedIn:false,isSignedUp:false};
export default function SignUpReducer(prevState = initialState,action){
return produce(prevState,draft =>{
    switch(action.type){
        case CHANGE_SIGNUP_INPUT:
            console.log(draft , draft[action.fieldName],action.fieldValue);
            draft[action.fieldName]=action.fieldValue;
        break;
        case SIGNUP_SUBMIT:
            draft.isLoading=false;
            break;
        case SIGNUP_SUBMIT_SUCCESS:
            draft.isLoading=false;
            draft.isSignedUp=true;
           // console.log("Success Reducer signed up "+draft.isSignedUp);
            break;
        case SIGNUP_SUBMIT_FAILURE:
            draft.isLoading=false;
            draft.isSignedUp=false;
            break;
              
    }
})
}