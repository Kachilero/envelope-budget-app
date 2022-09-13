import React from "react";
import type { DrawerState } from "../../Globals";

interface RightDrawerProps extends DrawerState {
  children?: JSX.Element | JSX.Element[];
  open: boolean;
}

const RightDrawer = (props: RightDrawerProps): JSX.Element => {
  return (
    <div>
      <h2>Right Drawer</h2>
      {props.children ? props.children : null}
    </div>
  )
}

export default RightDrawer;
