import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { TeamMember } from "../Team-slice";
import Address from "../../../../Address";


const teamMember :TeamMember ={
    _id: "",
    teamMember: "",
    teamMemberRole: "",
    teamMemberDescription:"",
    teamMemberEmail:"",
    teamMemberPhotoUrl:"",
    __v: 0
}

export const fetchTeamMember = createAsyncThunk("/get/oneTeamMember",async(id:string)=>{
    return axios.get(`${Address}/api/teamMembers/one/${id}`)
       .then(res=>res.data)
})

const oneTeamMemberSlice = createSlice({
    name :"oneTeamMember",
    initialState:{
        loading:false,
        error:"",
        teamMember:teamMember
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
          .addCase(fetchTeamMember.pending,(state)=>{
            state.loading = true
          })
          .addCase(fetchTeamMember.fulfilled,(state,action)=>{
            state.loading= false
            state.teamMember = action.payload
          })
          .addCase(fetchTeamMember.rejected,(state,action)=>{
            state.loading = false
            state.error= action.error.message || "error fetching The Team Member"
          })
    }
})

export default oneTeamMemberSlice.reducer;