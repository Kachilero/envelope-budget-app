import React from "react";
import type {DrawerState} from "../../Globals";

interface LeftDrawerProps extends DrawerState {
  children?: JSX.Element | JSX.Element[];
  open: boolean;
}

const LeftDrawer = (props: LeftDrawerProps): JSX.Element => {
  console.log(`%cLeft Drawer Props: `, 'color:yellow', props);
  
  return (
    <div>
      <p>Left Drawer</p>
      {props.children ? props.children : null}
    </div>
  )
};

export default LeftDrawer;
