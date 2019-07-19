import React, { Component } from 'react'
import produce from "immer";
import {GET_BRANDS,GET_BRANDS_SUCCESS,GET_BRANDS_FAILURE} from "../ActionTypes/BrandsAT";
const initialState={brandsList:[],isLoading:false};
export default function brandsReducer(prevState=initialState,action){
   return produce(prevState,draft=>{
        switch(action.type){
            case GET_BRANDS:
                    draft.isLoading=true;
                break;
            case GET_BRANDS_SUCCESS:
                draft.brandsList = action.response;
                draft.isLoading=false;
                break;
            case GET_BRANDS_FAILURE:
                draft.error=action.error;
                draft.isLoading=false;
                break;
            default:
                return prevState;
        }
    })

}