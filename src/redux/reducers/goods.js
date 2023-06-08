import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import {API_KEY} from '../../utils/config';


export const getGoods = createAsyncThunk(
    'goods/getGoods',
    async (_, {rejectWithValue}) => {
        try {
            const res = await axios('shop?lang=en', {
            headers: {
                Authorization: API_KEY
            }
        })

           if(res.data.result !== true){
                throw new Error('Can\'t fetch  data goods')
           }

        return res.data.shop

        } catch (error) {
            return rejectWithValue(error.message)
            
        }
    },
      { 
          condition: (_, {getState}) => {
              const {loading} = getState().goods
              if(loading === 'loading'){
                  return false
              }
          }
      }
)


const initialState = {
    data: [],
    error: '',
    status: '',
}

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGoods.pending, (state, action)=>{
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getGoods.rejected, (state, action)=> {
                state.error = action.payload;
                state.status = 'error';
            })
            .addCase(getGoods.fulfilled, (state, action)=> {
                state.data = action.payload
                state.status = 'done'
            })
    }

})

export const goodsReducer = goodsSlice.reducer