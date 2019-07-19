import {GET_BRANDS,GET_BRANDS_SUCCESS,GET_BRANDS_FAILURE} from "../ActionTypes/BrandsAT";

export function getBrands(){
    return {
        type: GET_BRANDS
    }
};

export function getBrandsSuccess(response){
    return {
        type: GET_BRANDS_SUCCESS,response
    }
};
export function getBrandsFailure(error){
    return {
        type: GET_BRANDS_FAILURE,error
    }
};