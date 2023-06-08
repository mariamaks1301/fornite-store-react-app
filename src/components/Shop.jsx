import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from '../redux/reducers/goods';
import GoodsList from './GoodsList';
import Cart from './Cart';
import CartList from './CartList';

const Shop = () => {

    const [openCart, setOpenCart] = useState(false);
    const dispatch = useDispatch();
    const {data = []} = useSelector(state => state.goods);
    

    // getGoods
     useEffect(()=> {
         dispatch(getGoods());  
    }, [dispatch])



    return (
        <div className='main #757575 grey darken-1'>
            <Cart quantity={data.length} openCart={openCart} setOpenCart={setOpenCart}/>
            <CartList openCart={openCart} setOpenCart={setOpenCart}/> 
            
            <GoodsList /> 
            
            
            
        </div>
    );
};

export default Shop;