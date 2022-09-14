import {combineReducers, configureStore} from '@reduxjs/toolkit';
import drawerSlice from "./features/drawers/drawers-slice";

const rootReducer = combineReducers({
  drawers: drawerSlice
})

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
