import React from "react";
import type { DrawerState } from "../../Globals";

interface BottomDrawerProps extends DrawerState {
  children?: JSX.Element | JSX.Element[];
  open: boolean;
}

const BottomDrawer = (props: BottomDrawerProps): JSX.Element => {
  return (
    <div>
      <h2>Bottom Drawer</h2>
    </div>
  )
};

export default BottomDrawer;
