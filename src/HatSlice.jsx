import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const HatSlice=createSlice({
    name:"ourcart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtocart:(state,action)=>{
            const cartdata=state.cart.filter((key)=>{
                if(key.id==action.payload.id){
                    return true
                }
            })
            if(cartdata.length>=1)
            {
                message.warning("This product is already available in cart")
            }
            else{
                state.cart.push(action.payload);
            }
        },
        cartincrement:(state,action)=>{
           state.cart.filter((key)=>{if(key.id==action.payload.id){key.qnty++}})
        },
        cartdecrement:(state,action)=>{
            state.cart.filter((key)=>{
                if(key.id==action.payload.id){
                    if(key.qnty>1)
                    {
                        key.qnty--;
                    }
                    else{
                        message.warning("Quantity can not be less than 1")
                    }
                    }})
         },
         cartdelete:(state,action)=>{
            state.cart=state.cart.filter(key=>key.id!=action.payload.id)
         }

    }
})

export default HatSlice.reducer;
export const {addtocart,cartincrement,cartdecrement,cartdelete}=HatSlice.actions;