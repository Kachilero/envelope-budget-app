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
    </div>
  )
}

export default RightDrawer;
