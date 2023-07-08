import { ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART, SET_PRODUCT_LIST } from "./constant";

export const cartdata = (data=[],action) =>{
    console.log("this is from reducer",action);
    switch(action.type){
        case ADD_TO_CART:
            console.warn("type add is called");
            return [action.data, ...data] //..data destruct
        case REMOVE_FROM_CART:
            let newdata=data.slice(0,-1)
            return [...newdata];
        return [...data]
        case EMPTY_CART:
            data=[]
            return [...data];
        case SET_PRODUCT_LIST:
            console.log("redu");
            return [...action.data]
        default:
            console.log("no action");
            return data ;
    }
}