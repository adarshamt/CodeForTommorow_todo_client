import { configureStore } from "@reduxjs/toolkit";


import ToDo_slice from'./TodoSlice'


const store = configureStore({
    reducer :{
       ToDo_slice: ToDo_slice
    }
})
export default store