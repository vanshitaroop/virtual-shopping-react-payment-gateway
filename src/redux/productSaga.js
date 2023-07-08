import { type } from "@testing-library/user-event/dist/type";
import {takeEvery,put} from "redux-saga/effects"
import { PRODUCT_LIST,SET_PRODUCT_LIST } from "./constant"
function* getproductlist(){
    let data = yield fetch("http://localhost:3500/product");
    data = yield data.json();
    yield console.log("here we will call an api",data);
    yield put({type:SET_PRODUCT_LIST,data}) //this put 1st parameter tells us that which reduxer to call after you get the dat aand in second parameter the data is ent to that reducer
}
function* productSaga(){
   yield takeEvery(PRODUCT_LIST,getproductlist);
}
export default productSaga;