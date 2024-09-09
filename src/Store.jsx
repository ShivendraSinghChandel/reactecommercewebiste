import { configureStore } from "@reduxjs/toolkit";
import data from './HatSlice'

const Store=configureStore({
    reducer:{
        ourcart:data
    }
})

export default Store;