import {createAsyncThunk,createSlice,PayloadAction} from "@reduxjs/toolkit"
import Address from "../../../../Address"
import axios from "axios"
import { Certificate } from "../Certicates-api-slice"


const oneCertificate : Certificate ={
    _id: "",
    name: "",
    description:"",
    reference: "",
    fileUrl:"",
    __v:0
}

export const getOneCertificate= createAsyncThunk("/get/oneCertificate",async(id:string)=>{
    return axios.get(`${Address}/api/certificates/one/${id}`)
      .then(res=>res.data)
})

const oneCertifcateSlice = createSlice({
    name : "oneCertificate",
    initialState:{
        loading:false,
        error: "",
        oneCertificate:oneCertificate
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
          .addCase(getOneCertificate.pending,(state)=>{
            state.loading = true
          })
          .addCase(getOneCertificate.fulfilled,(state,action)=>{
            state.loading= false
            state.oneCertificate= action.payload
          })
          .addCase(getOneCertificate.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message || "error fetching certficate"
          })
    }
})
 


export default oneCertifcateSlice.reducer