import {CHANGE_INPUT,LOGIN_SUBMIT,LOGIN_SUBMIT_SUCCESS,LOGIN_SUBMIT_FAILURE} from "../ActionTypes/loginAT"

export function changeInput(fieldName,fieldValue){
    return {
        type: CHANGE_INPUT,fieldName,fieldValue
    }
};

 export function loginSubmit(email,password){
        return {
            type: LOGIN_SUBMIT,email,password
        }
    }
    export function loginSubmitSuccess(response){
        return {
            type: LOGIN_SUBMIT_SUCCESS,response
        }
    };
    export function loginSubmitFailure(error){
        return {
            type: LOGIN_SUBMIT_FAILURE,error
        }
    };