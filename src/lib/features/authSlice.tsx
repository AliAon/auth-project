// redux/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchHost, fetchNomad, fetchUserType } from './authAction';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
     user: null,
     token:null,
     type:null,
     host:{
      isHost:false,
      data:null
     },
     nomad:{
      isNomad:false,
      data:null
     } 
    },
  
  reducers: {
    authuser: (state,action) => {
      state.user = action.payload;
    },
    usertoken: (state,action) => {
      state.token = action.payload;
    },
    logout:(state)=>{
      state.user=null,
      state.token=null,
      state.type=null,
      state.host={
       isHost:false,
       data:null
      },
      state.nomad={
       isNomad:false,
       data:null
      } 
    }

  },
  extraReducers:(build)=>{
    build.addCase(fetchUserType.fulfilled,(state,action)=>{
      state.type=action.payload.user_type
    }).addCase(fetchHost.fulfilled,(state,action)=>{
      state.host.isHost=true
      state.host.data=action.payload
    
    }).addCase(fetchNomad.fulfilled,(state,action)=>{
        state.nomad.isNomad=true
        state.nomad.data=action.payload
      }).addCase(fetchNomad.rejected,(state)=>{
        state.nomad.isNomad=false
      }).addCase(fetchHost.rejected,(state)=>{
        state.host.isHost=false
      })
  }
});

export const {  authuser,usertoken,logout } = authSlice.actions;
export default authSlice.reducer;
