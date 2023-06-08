import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addtoCart } from '../redux/reducers/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GoodsItem = (item) => {
       const { mainId, displayName, displayDescription, displayType, price, displayAssets, mainType, rarity } = item;

       const dispatch = useDispatch();
       const { orders } = useSelector(state => state.cart);

       const notify = () => toast(`The ${displayName} was add to cart!`);


    //    const addToBasket = (item) => {

    //     const itemId = orders.findIndex(orderItem => orderItem.id === item.mainId);

    //     let newItem = {
    //         ...item,
    //         quantity: 1
    //     }

    //     if(itemId < 0){
    //         dispatch(addtoCart(newItem))
    //     }else{
    //         const newOrder = orders.map((orderItem, index) => {
    //             if(index === itemId){
    //                 return {
    //                     ...orderItem,
    //                     quantity: orderItem.quantity + 1
    //                 }
    //             }else{
    //                 return orderItem
    //             }
    //         })
    //     }

    //    }





    return (
        <div className="card" id={mainId}>
             <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={displayAssets[0].full_background}/>
            
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{displayName}<i className="material-icons right">more_vert</i></span>
                <div className='card-content-row bottom'> 
                    <p><button onClick={()=> {

                        dispatch(addtoCart(item))
                        notify()
                        
                        }} className='btn'>Buy</button></p>
                        <ToastContainer />
                    <span>{}</span>

                    <div>
                        {
                            price.regularPrice >= price.finalPrice ? <p>{price.regularPrice} P</p> 
                            : <>
                            <p>Previous Price: {price.regularPrice} P</p>
                            <p>Previous Price: {price.finalPrice} P</p>
                            </>

                        }
                        
                    </div>
                </div>
            </div>
            <div className="card-reveal #424242 grey darken-3 grey-text">
                <span className="card-title ">{displayDescription}<i className="material-icons right">close</i></span>
                <p className="card-title ">{displayDescription}</p>
                <p className="card-title ">Type: {displayType}</p>
                <p className="card-title ">Main Type: {mainType}</p>
                <p className="card-title ">rarity: {rarity.name}</p>

            </div> 
        </div>

    );
};

export default GoodsItem;

