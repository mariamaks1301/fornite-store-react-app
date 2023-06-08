import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../redux/reducers/cart';
import { calcTotalPrice } from '../redux/reducers/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartList = ({openCart, setOpenCart}) => {
    const dispatch = useDispatch();
    const { orders = [] } = useSelector(state => state.cart);
    const notify = () => toast(`Your order has been placed`);




    return (
        <div style={{display: openCart ? 'block' : 'none'}}  className='cartList__content' >
            <div className='cartList  white-text' >
                <h2 className='cartList__title #424242 grey darken-3'>Cart</h2>
                 {
                    orders.length > 0 ? orders.map((good) => (
                         <CartItem key={good.mainId} {...good}/>
                    )) : <h3 className='cartList__title #424242 grey darken-3'>Empty</h3>
                }

                <div className='cartList__total #424242 grey darken-3'>
                    <h3 className='cartList__total-price #424242 grey darken-3'>Total Price: </h3> 
                    <span className='cartList__total-price'>
                       
                    {
                        orders.reduce((sum, obj) => obj.price.finalPrice * obj.quantity + sum, 0) 
                    }

                    P </span>

                    
                    <button onClick={()=>{ 
                        setOpenCart(false)
                        dispatch(clearCart())
                        notify()
                        }} 
                        className='btn'
                    >Checkout</button>
                    <ToastContainer />

                </div>


            </div>
        </div>
    );
};

export default CartList;