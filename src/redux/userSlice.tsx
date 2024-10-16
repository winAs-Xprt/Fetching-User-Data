import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface CounterState {
  data: [] | null,
  loading : boolean,
  error : string | null
}


const initialState: CounterState = {
  data : [],
  loading: false,
  error : ""
}

export const getUsers = createAsyncThunk("user",async()=>{
  return  fetch("https://jsonplaceholder.typicode.com/users")
    .then (res => res.json()) 
})


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder){
     builder
     .addCase(getUsers.pending,(state)=>{
        state.loading = true
     })
     .addCase(getUsers.fulfilled,(state,action)=>{
  
        state.loading = false;
        state.error = null ;
        state.data = action.payload
     })
     .addCase(getUsers.rejected,(state,action:PayloadAction<any>)=>{
        state.loading = false;
        state.error = action.payload 
        state.data = []
     })
  }
})


export default userSlice.reducer