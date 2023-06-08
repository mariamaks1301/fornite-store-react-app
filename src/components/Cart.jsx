import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = (props) => {

    const {openCart, setOpenCart} = props;
    
    const dispatch = useDispatch();
    const {orders} = useSelector(state => state.cart);




    return (
        <div onClick={()=> setOpenCart(prev => !prev)} className='cart  #01579b light-blue darken-4 white-text' >
            <i className='material-icons'>shopping_cart</i>
            {orders.length ? <span className='cart_quantity'>{orders.length}</span> : null}
            
        </div>
    );
};

export default Cart;