import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import Address from "../../Address"


interface Client{
    _id: string,
    clientName: string,
    project: string,
    clientsLogoUrl: string,
    __v: number
}

const clients :Client [] = [] 

export const getClients = createAsyncThunk("get/clients",()=>{
    return axios.get(`${Address}/api/clients/all`)
      .then(res=>res.data)
})

const clientsSlice = createSlice({
    name :"clients",
    initialState:{
        loading : false,
        error :"",
        clients:clients
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
          .addCase(getClients.pending,(state)=>{
            state.loading = true
          })
          .addCase(getClients.fulfilled,(state,action)=>{
            state.loading= false
            state.clients= action.payload
          })
          .addCase(getClients.rejected,(state,action)=>{
            state.loading= false
            state.error = action.error.message || "error fetching the clients"
          })
    }
})


export default clientsSlice.reducer;