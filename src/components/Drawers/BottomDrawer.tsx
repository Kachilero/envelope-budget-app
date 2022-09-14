import React from "react";
import type { DrawerState } from "../../Globals";

interface BottomDrawerProps extends DrawerState {
  children?: JSX.Element | JSX.Element[];
  open: boolean;
}

const BottomDrawer = (props: BottomDrawerProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <h2>Bottom Drawer</h2>
      {props.children ? props.children : null}
    </div>
  )
};

export default BottomDrawer;
