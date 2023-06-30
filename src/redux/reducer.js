import { ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART } from "./constant";

export const cartdata = (data=[],action) =>{
    console.log("this is from reducer",action);
    switch(action.type){
        case ADD_TO_CART:
            console.warn("type add is called");
            return [action.data, ...data] //..data destruct
        case REMOVE_FROM_CART:
            data.length=data.length?data.length-1:[];
        return [...data]
        case EMPTY_CART:
            data=[]
            return [...data];
        default:
            console.log("no action");
            return data ;
    }
}