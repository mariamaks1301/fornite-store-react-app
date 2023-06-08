import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, decrementOrder, addtoCart } from '../redux/reducers/cart';
import {BsPlus } from 'react-icons/bs';
import {IoMdClose} from 'react-icons/io';
import {BiMinus} from 'react-icons/bi';


const CartItem = (good) => {

     const { mainId, displayName, price, displayAssets, quantity} = good;
     const dispatch = useDispatch();


    return (
        <div id={mainId} className='cartItem #424242 grey darken-3'>
            <img className="activator cartItem__img" src={displayAssets[0].full_background}/>
            <p className='cartItem__title'>{displayName}</p>
            <div className='cartItem__row'>
                <button onClick={()=> dispatch(decrementOrder(good))} className='cartItem__btn button-small'>
                    <BiMinus/>
                </button>
                <span className='cartItem__count'>{quantity}</span>
                <button className='cartItem__btn button-small' onClick={()=> dispatch(addtoCart(good))} >
                    <BsPlus/>
                </button>
            </div>
            <p className='cartItem__price'>{price.finalPrice *  quantity} P</p>
            <button className='button-small' onClick={()=> dispatch(removeFromCart(good.mainId))}>
                <IoMdClose/>
            </button>
        </div>
    );
};

export default CartItem;