import { takeLatest, put } from "redux-saga/effects";
import {getBrandsSuccess,getBrandsFailure} from "../ActionCreators/BrandsAC";
import {GET_BRANDS} from "../ActionTypes/BrandsAT";

function* getBrands(){

    try{
        let brandsResponse = yield fetch(`http://localhost:4000/brands`);
        var brandsList= yield brandsResponse.json();
        if(brandsList.length >0){
            yield put(getBrandsSuccess(brandsList));
        }else{
           throw new Error("Brands list is missing");
        }
        
    }catch(err){
        yield put(getBrandsFailure(err));
    }
    
}


export default function* brandsSaga(){
    yield takeLatest(GET_BRANDS, getBrands);
  }