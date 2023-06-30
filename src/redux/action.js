import { ADD_TO_CART,REMOVE_FROM_CART ,EMPTY_CART} from "./constant";
export const addtocart =(data)=>{
    console.warn("action called",data);
    return{
        type:ADD_TO_CART,
        data:data
    }
}
export const removecart = (data)=>{
    return{
        type:REMOVE_FROM_CART,
        data
    }
}
export const emptycart = (data)=>{
    return{
        type:EMPTY_CART,
        data
    }
}