import { takeLatest, put } from "redux-saga/effects";
import {GET_CHOCOLATES} from "../ActionTypes/ChocolatesAT";
import {getChocolates,getChocolatesSuccess,getChocolatesFailure} from "../ActionCreators/ChocolatesAC"
function* getChocolatesList(){
    //console.log(id);
    
    try{
       // if(obj.id!=="" && obj.id!== undefined){
            // let chocolatesResponse = yield fetch(`http://localhost:4000/chocolates/?brandId=${obj.id}`);
            // var chocolatesList= yield chocolatesResponse.json();
            // if(chocolatesList.length >0){
            //     yield put(getChocolatesSuccess(chocolatesList));
            // }else{
            //    throw new Error("Brands list is missing");
            // }
       // }else{
            let chocolatesResponse = yield fetch(`http://localhost:4000/chocolates`);
            var chocolatesList= yield chocolatesResponse.json();
            if(chocolatesList.length >0){
                yield put(getChocolatesSuccess(chocolatesList));
            }else{
               throw new Error("Chocolate list is missing");
            }
       // }
        
        
    }catch(err){
        yield put(getChocolatesFailure(err));
    }
}


export default function* ChocolatesSaga(){
    yield takeLatest(GET_CHOCOLATES, getChocolatesList);
  }