import React from "react";
import type {DrawerState} from "../../Globals";

interface LeftDrawerProps extends DrawerState {
  children?: JSX.Element[];
}

const LeftDrawer = (props: LeftDrawerProps) => {
  console.log(`%cLeft Drawer Props: `, 'color:yellow', props);
  
  return (
    <div>
      <p>Left Drawer</p>
      {props.children ? props.children : null}
    </div>
  )
};

export default LeftDrawer;
