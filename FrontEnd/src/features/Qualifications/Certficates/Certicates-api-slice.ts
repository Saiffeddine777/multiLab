import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Address from "../../../Address";

interface Certificate {
    _id: string,
    name: string,
    description: string,
    reference: string,
    fileUrl:string,
    __v:number
}

const certificates:Certificate[] = []

export const getCertificates = createAsyncThunk("/get/certficates",async()=>{
    return axios.get(`${Address}/api/certificates/all`)
        .then(res=>res.data)
})

const certificatesSlice= createSlice({
    name: "certificates",
    initialState:{ 
        loading:false,
        error:"",
        certificates:certificates
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCertificates.pending,(state)=>{
            state.loading= true
        })
        .addCase(getCertificates.fulfilled,(state,action)=>{
            state.loading = false
            state.certificates= action.payload
        })
        .addCase(getCertificates.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message || "error fetching certificates"
        })
    } 
})

export default certificatesSlice.reducer;