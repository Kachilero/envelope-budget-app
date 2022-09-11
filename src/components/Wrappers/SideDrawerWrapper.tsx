import React, { useEffect, useState } from "react";
import { LogoContainer } from "../index";
import clsx from "clsx";
import type {DrawerState} from "../../Globals";

interface SideDrawerProps extends DrawerState{
  bottomDrawerOpen: boolean;
  leftDrawerOpen: boolean;
  rightDrawerOpen: boolean;
  variant?: 'left' | 'right' | 'bottom' | undefined;
}

const SideDrawerWrapper = ({
  bottomDrawerOpen,
  leftDrawerOpen,
  rightDrawerOpen,
  variant = 'left'
}: SideDrawerProps) => {
  
  // const { open } = props;
  const wrapperClasses = clsx(
    'h-screen', 'bg-slate-700', 'drop-shadow-lg',
    {
      'max-w-[20%]': bottomDrawerOpen || leftDrawerOpen || rightDrawerOpen,
      'max-w-[10%]': !leftDrawerOpen,
      'max-w-0': !bottomDrawerOpen || !rightDrawerOpen,
      'variant--left': variant === 'left',
      'variant--right': variant === 'right',
      'variant--bottom': variant === 'bottom'
    }
  );
  
  return (
    <div className={wrapperClasses}>
      <LogoContainer />
      <LogoContainer />
    </div>
  )
}

export default SideDrawerWrapper;
