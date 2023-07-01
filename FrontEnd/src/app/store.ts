import {configureStore} from "@reduxjs/toolkit"
import servicesReducer from "../features/services/Services-api-slice"
import  messageReducer  from "../features/Contact/Contact-api-slice"


const store = configureStore({
    reducer:{
        services:servicesReducer,
        message:messageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 

export default store;