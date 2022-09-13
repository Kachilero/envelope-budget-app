import React from "react";
import { BottomDrawer, LeftDrawer, RightDrawer } from "../index";
import clsx from "clsx";
import type { DrawerState}  from "../../Globals";

interface SideDrawerProps extends DrawerState {
  children?: JSX.Element | JSX.Element[];
  open: boolean;
  variant: 'LEFT' | 'RIGHT' | 'BOTTOM' | undefined;
}

const SideDrawerWrapper = ({
  variant = 'LEFT',
  open
}: SideDrawerProps) => {
  const commonClasses: string[] = [
    'h-screen', 'bg-slate-700','drop-shadow-lg', 'max-w-[20%]'
  ];
  const leftClasses: object = {
    'variant--left': variant === 'LEFT',
    'max-w-[10%]': !open
  };
  const rightClasses: object = {
    'variant--right': variant === 'RIGHT',
    'w-0': !open
  };
  const bottomClasses = clsx(
    'variant--bottom',
    'text-slate-50',
    'bg-slate-700',
    'drop-shadow-lg',
    'w-screen',
    'h-auto',
    'max-h-[20%]',
    'mx-auto',
    {
    'h-0': !open
  });
  const wrapperClasses = clsx(
    commonClasses,
    leftClasses,
    rightClasses
  );
  
  return (
    <div className={variant === 'BOTTOM' ? bottomClasses : wrapperClasses}>
      {variant === 'LEFT' ? (
        <LeftDrawer open={open}>
          <p>The Variant is: {variant} and it {open ? 'should' : 'should NOT'} be open</p>
        </LeftDrawer>
        ) : null}
      {variant === 'RIGHT' ? (
        <RightDrawer open={open}>
          <p>The Variant is: {variant} and it {open ? 'should' : 'should NOT'} be open</p>
        </RightDrawer>
      ) : null}
      {variant === 'BOTTOM' ? (
        <BottomDrawer open={open}>
          <p>The Variant is: {variant} and it {open ? 'should' : 'should NOT'} be open</p>
        </BottomDrawer>
      ) : null}
    </div>
  )
}

export default SideDrawerWrapper;
