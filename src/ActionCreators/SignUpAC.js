import {CHANGE_SIGNUP_INPUT,SIGNUP_SUBMIT,SIGNUP_SUBMIT_SUCCESS,SIGNUP_SUBMIT_FAILURE} from "../ActionTypes/SignUpAT";

export function changeInput(fieldName,fieldValue){
   console.log(fieldName,fieldValue);
    return {
        type: CHANGE_SIGNUP_INPUT,fieldName,fieldValue
    }
};
export function signUpSubmit(data){
    return {
        type: SIGNUP_SUBMIT,data
    }
};
export function signUpSubmitSuccess(response){
    return {
        type: SIGNUP_SUBMIT_SUCCESS,response
    }
};
export function signUpSubmitFailre(error){
    return {
        type: SIGNUP_SUBMIT_FAILURE,error
    }
};