import {GET_CHOCOLATES,GET_CHOCOLATES_SUCCESS,GET_CHOCOLATES_FAILURE} from "../ActionTypes/ChocolatesAT";
import produce from "immer";

const initialState = {chocolatesList:[],isLoading:false,error:""};
export default function ChocolatesReducer(prevState=initialState,action){
    return produce(prevState,draft=>{
        switch(action.type){
            case GET_CHOCOLATES:
                draft.isLoading=true;
                break;
            case GET_CHOCOLATES_SUCCESS:
                draft.chocolatesList=action.response;
                draft.isLoading=false;
                break;
            case GET_CHOCOLATES_FAILURE:
                draft.error=action.error;
                draft.chocolatesList=[];
                draft.isLoading=false;
                break;

        }
    })
}
