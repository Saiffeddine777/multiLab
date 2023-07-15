import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import Address from "../../Address"

interface Review {
_id:string,
reviewerName:string,
email: string,
text: string,
rating:number,
__v: number
}

const reviews :Review[] = []


export const getReviews = createAsyncThunk('/get/allReviews',async()=>{
    return axios.get(`${Address}/api/reviews/all`)
       .then(res=>res.data)
})


const reviewsSlice = createSlice({
    name: "reviews",
    initialState:{
       loading:false,
       error : "",
       reviews:reviews
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
           .addCase(getReviews.pending,(state)=>{
               state.loading = true
           })
           .addCase(getReviews.fulfilled,(state,action)=>{
               state.loading = false
               state.reviews = action.payload
           })
           .addCase(getReviews.rejected,(state,action)=>{
               state.loading = false
               state.error = action.error.message || "error fetching reviews"
           })
    }
})

export default reviewsSlice.reducer;