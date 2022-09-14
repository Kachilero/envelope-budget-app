import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface DrawersState {
  left: boolean;
  right: boolean;
  bottom: boolean;
}

const initialState: DrawersState = {
  left: true,
  right: false,
  bottom: false
}

export const drawerSlice = createSlice({
  name: 'drawers',
  initialState,
  reducers: {
    toggleLeftDrawer: state => {
      console.log(`%cToggle LEFT current = %c${state.left} %cOpposite = %c${!state.left}`,
        'color:orange',
        'color:lightgreen',
        'color:orange',
        'color:lightgreen'
      );
      state.left = !state.left;
    },
    toggleRightDrawer: state => {
      state.right = !state.right;
    },
    toggleBottomDrawer: state => {
      state.bottom = !state.bottom;
    }
  }
})

export const {
  toggleLeftDrawer,
  toggleRightDrawer,
  toggleBottomDrawer
} = drawerSlice.actions;

export const selectLeftDrawer = (state: RootState) => state.drawers.left;
export const selectRightDrawer = (state: RootState) => state.drawers.right;
export const selectBottomDrawer = (state: RootState) => state.drawers.bottom;

export default drawerSlice.reducer;
