import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const findOrder = state.orders.find((obj)=> obj.mainId === action.payload.mainId);

            if(findOrder) {
                findOrder.quantity++
            }else{
                state.orders.push({
                    ...action.payload,
                    quantity: 1
                })
            }
        },
        removeFromCart: (state, action) => {
            state.orders = state.orders.filter(item => item.mainId !== action.payload)
        },
        decrementOrder: (state, action) => {
            const findOrder = state.orders.find((obj)=> obj.mainId === action.payload.mainId);

            if(findOrder.quantity > 1) {
                findOrder.quantity--
            }else{
                state.orders = state.orders.filter(item => item.mainId !== action.payload)
            }
        },
        calcTotalPrice: (state, action) => {
            return state.orders.reduce((sum, obj) => obj.price * obj.quantity + sum, 0);
        },
        clearCart: () =>  initialState 
    
    }
})

export const { addtoCart, removeFromCart, decrementOrder, clearCart, calcTotalPrice} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;


// reducers: {
//     addItem(state, action: PayloadAction<CartItem>) {
//       const findItem = state.items.find((obj) => obj.id === action.payload.id);

//       if (findItem) {
//         findItem.count++;
//       } else {
//         state.items.push({
//           ...action.payload,
//           count: 1,
//         });
//       }

//       state.totalPrice = calcTotalPrice(state.items);
//     },
//     minusItem(state, action: PayloadAction<string>) {
//       const findItem = state.items.find((obj) => obj.id === action.payload);

//       if (findItem) {
//         findItem.count--;
//       }

//       state.totalPrice = calcTotalPrice(state.items);
//     },
//     removeItem(state, action: PayloadAction<string>) {
//       state.items = state.items.filter((obj) => obj.id !== action.payload);
//       state.totalPrice = calcTotalPrice(state.items);
//     },
//     clearItems(state) {
//       state.items = [];
//       state.totalPrice = 0;
//     },
//   },
