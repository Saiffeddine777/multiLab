import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import Address from "../../Address"

interface Service {
    _id: string,
    title: string,
    sector: string,
    category: string,
    analysis: string,
    description: string,
    accredited: boolean,
    __v: number
}

const services:Service[] = []

export const  getServices = createAsyncThunk("/get/services",async ()=>{
    return axios.get(`${Address}/api/services/all`)
     .then(res=>res.data)
})


const serviceSlice = createSlice({
    name :"services",
    initialState:{
        services: services,
        error:"",
        loading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getServices.pending,(state)=>{
            state.loading = true
        })
        .addCase(getServices.fulfilled,(state,action)=>{
            state.loading = false;
            state.services= action.payload
        })
        .addCase(getServices.rejected,(state, action)=>{
            state.loading=false
            state.error= action.error.message || "error fetching services"
        })
    }
})

export default serviceSlice.reducer;
