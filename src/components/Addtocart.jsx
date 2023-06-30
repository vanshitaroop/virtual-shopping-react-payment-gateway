import React from 'react'
import { addtocart } from '../redux/action'
import { useDispatch } from 'react-redux'
const Addtocart = () => {
    const dispatch = useDispatch();
    const data ={
        price:'10000',
        product:"IPhone"
    }
    return (
        <button className='btn option1 my-2' onClick={()=>{dispatch(addtocart(data))}}>
            Add to cart
        </button>
    )
}

export default Addtocart