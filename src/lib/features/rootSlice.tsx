// redux/slices/index.js
import { combineReducers } from '@reduxjs/toolkit';
import { userApi } from '../services/userApi';
import { skillApi } from '../services/skillsApi';
import { positionApi } from '../services/positionApi';
import { nomadApi } from '../services/nomadApi';
import { basicApi } from '../services/basicApi';





import authReducer from './authSlice';
const rootReducer = combineReducers({
  auth: authReducer,
  [userApi.reducerPath]:userApi.reducer,
  [skillApi.reducerPath]:skillApi.reducer,
  [positionApi.reducerPath]:positionApi.reducer,
  [nomadApi.reducerPath]:nomadApi.reducer,
  [basicApi.reducerPath]:basicApi.reducer


});

export default rootReducer;
