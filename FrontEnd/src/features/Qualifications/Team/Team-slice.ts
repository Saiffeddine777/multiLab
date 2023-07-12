import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Address from "../../../Address";

export interface TeamMember{
  _id: string,
  teamMember: string,
  teamMemberRole: string,
  teamMemberDescription:string,
  teamMemberEmail:string,
  teamMemberPhotoUrl:string,
  __v: number
}

const teamMembers :TeamMember[]=[]

export const getTeamMembers = createAsyncThunk('/get/teamMembers',()=>{
    return axios.get(`${Address}/api/teamMembers/all`)
       .then(res=>res.data)
})

const teamMembersSlice = createSlice({
    name:"teamMembers",
    initialState:{
        loading:false,
        error:"",
        teamMembers:teamMembers
    },
    reducers:{},
    extraReducers:(build)=>{
        build 
         .addCase(getTeamMembers.pending,(state)=>{
            state.loading= true
         })
         .addCase(getTeamMembers.fulfilled,(state,action)=>{
            state.loading= false
            state.teamMembers= action.payload
         })
         .addCase(getTeamMembers.rejected,(state,action)=>{
            state.loading= false
            state.error= action.error.message || "error fetching Team Members"
         })
    }
})


export default teamMembersSlice.reducer;