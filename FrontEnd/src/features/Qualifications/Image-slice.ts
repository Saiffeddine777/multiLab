import {createAsyncThunk,createSlice,PayloadAction} from "@reduxjs/toolkit"

const visible = false

const createHover = createSlice({
  name: "visible",
  initialState: {value:visible},
  reducers:{
    visibleReducer:(state)=>{
        state.value = true
    },
    notVisibleReducer:(state)=>{
        state.value = false
    }
  }
})

export const {
    visibleReducer,
    notVisibleReducer
} = createHover.actions

export default createHover.reducer
