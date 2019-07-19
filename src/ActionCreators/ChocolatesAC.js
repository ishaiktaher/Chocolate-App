import {GET_CHOCOLATES,GET_CHOCOLATES_SUCCESS,GET_CHOCOLATES_FAILURE} from "../ActionTypes/ChocolatesAT";

export function getChocolates(id){
    return{
        type:GET_CHOCOLATES,id
    }
}
export function getChocolatesSuccess(response){
    return{
        type:GET_CHOCOLATES_SUCCESS,response
    }
}

export function getChocolatesFailure(error){
    return{
        type:GET_CHOCOLATES_FAILURE,error
    }
}
