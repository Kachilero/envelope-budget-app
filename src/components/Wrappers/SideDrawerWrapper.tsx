import React, { useEffect, useState } from "react";
import {BottomDrawer, LeftDrawer, LogoContainer, RightDrawer} from "../index";
import clsx from "clsx";
import type {DrawerState} from "../../Globals";

interface SideDrawerProps extends DrawerState {
  children?: JSX.Element | JSX.Element[];
  open: boolean;
}

const SideDrawerWrapper = ({
  variant = 'LEFT',
  open
}: SideDrawerProps) => {
  // const { open } = props;
  const wrapperClasses = clsx(
    'h-screen', 'bg-slate-700', 'drop-shadow-lg',
    {
      'max-w-[20%]': open,
      'max-w-[10%]': variant === 'LEFT' && !open,
      'max-w-0': variant !== 'LEFT' && !open,
      'variant--left': variant === 'LEFT',
      'variant--right': variant === 'RIGHT',
      'variant--bottom': variant === 'BOTTOM'
    }
  );
  
  return (
    <div className={wrapperClasses}>
      <p>The Variant is: {variant} and it {open ? 'should' : 'should NOT'} be open</p>
      {variant === 'LEFT' ? (
        <LeftDrawer open={open}>
          <LogoContainer />
          <LogoContainer />
        </LeftDrawer>
        ) : null}
      {variant === 'RIGHT' ? (
        <RightDrawer open={open}>
          <h3>This comes from the SideDrawerWrapper</h3>
        </RightDrawer>
      ) : null}
      {variant === 'BOTTOM' ? (
        <BottomDrawer open={open}>
          <h3>This comes from the SideDrawerWrapper</h3>
        </BottomDrawer>
      ) : null}
    </div>
  )
}

export default SideDrawerWrapper;
