import { configureStore } from "@reduxjs/toolkit";
import productSaga from "./productSaga";
import createSagaMiddleware from "@redux-saga/core"; //this is for creating the middle ware betwen the stor of redux and saga
import rootreducer from "./rootreducer"
const sagaMiddleware=createSagaMiddleware();
 const store = configureStore({
    reducer:rootreducer,
    middleware:()=>[sagaMiddleware] //it is registration of our middleware, middle ware always takes an call back function
});
sagaMiddleware.run(productSaga);
 export default store