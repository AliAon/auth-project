// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/rootSlice"; // Import your root reducer
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../services/userApi";
import { skillApi } from "../services/skillsApi";
import { positionApi } from "../services/positionApi";
import {persistStore,persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage";
import { nomadApi } from "../services/nomadApi";
import { basicApi } from "../services/basicApi";
const persistConfig={
  key: 'root',
  storage,
  whitelist: ['auth'], // Only the 'counter' slice will be persisted

}
const persistedReducer=persistReducer(persistConfig,rootReducer)

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(userApi.middleware)
        .concat(skillApi.middleware)
        .concat(positionApi.middleware)
        .concat(nomadApi.middleware)
        .concat(basicApi.middleware)
  });

const store = makeStore();
setupListeners(store.dispatch);
const persist=persistStore(store)
export {store,persist}
