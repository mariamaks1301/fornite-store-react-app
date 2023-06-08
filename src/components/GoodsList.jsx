import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoodsItem from './GoodsItem';
import Preloader from './Preloader';

const GoodsList = () => {
    const {data = [], status} = useSelector(state => state.goods);
    const {orders = []} = useSelector(state => state.cart);



        return (
            <div className='goods__list container'>
                {
                    status === 'loading' ? <Preloader/> :
                
                    data.map(good => (
                        <GoodsItem key={good.mainId}  {...good}/>
                    ))
                    
                }
    
            </div>
        );
    }

    


export default GoodsList;