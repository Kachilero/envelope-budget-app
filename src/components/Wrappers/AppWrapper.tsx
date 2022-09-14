import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import {
  toggleLeftDrawer,
  toggleBottomDrawer,
  toggleRightDrawer,
  selectLeftDrawer,
  selectBottomDrawer,
  selectRightDrawer
} from "../../Slices/drawers/drawers-slice";
import type { AppState } from "../../Globals";
import { SideDrawerWrapper } from "../index";

/**
 * Main layout wrapper for app.
 * Since this will be the main layout file, it will also handle the layout state
 * of the child elements.
 *
 * See below for props
 * @link 'src/Globals.d.ts'
 * */
const AppWrapper: React.FC<AppState> = (props: AppState): JSX.Element => {
  const { user, loggedIn, drawer, dateTime } = props;
  const dispatch = useAppDispatch();
  const leftIsOpen = useAppSelector(selectLeftDrawer);
  const rightIsOpen = useAppSelector(selectRightDrawer);
  const bottomIsOpen = useAppSelector(selectBottomDrawer);
  const [dateTimeValue, setDateTimeValue] = useState<string>(dateTime);
  
  /**
   * Set dateTime if it hasn't been set, and set the drawer states from memory
   * */
  useEffect(() => {
    if (!dateTime) {
      setDateTimeValue(new Date().toString());
    }
  },[])
  
  console.log(`%cAppWrapper Props: `, 'color:orange', props);
  return (
    <>
      <div className="h-full max-w-full flex flex-row text-slate-50 bg-slate-800 mx-auto transition-all ">
        <SideDrawerWrapper open={useAppSelector(selectLeftDrawer)} variant={'LEFT'} />
        <div className='h-screen container flex flex-col'>
          <div className="h-auto">
            <p className="text-3xl">The User:</p>
          </div>
          <div className="h-auto">
            <div>Logged In: <span className="text-green-500">{loggedIn.toString()}</span></div>
            <div>Date/Time: <span className="text-green-500">{dateTimeValue}</span></div>
            {/*<div>Is LeftSideDrawer Open: <span className="text-green-500">{drawer.leftDrawerOpen.toString()}</span></div>
          <div>Is RightSideDrawer Open: <span className="text-green-500">{drawer.rightDrawerOpen.toString()}</span></div>*/}
            {Object.keys(user).map((userProp, idx) => {
              return (
                <div key={idx}>
                  {userProp}: <span className="text-green-500">{
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  user[userProp]
                }</span>
                </div>
              )
            })}
          </div>
          <button onClick={() => dispatch(toggleLeftDrawer())}>{leftIsOpen ? 'CLOSE' : 'OPEN'} LEFT DRAWER</button>
          <button onClick={() => dispatch(toggleRightDrawer())}>{rightIsOpen ? 'CLOSE' : 'OPEN'} RIGHT DRAWER</button>
          <button onClick={() => dispatch(toggleBottomDrawer())}>{bottomIsOpen ? 'CLOSE' : 'OPEN'} BOTTOM DRAWER</button>
        </div>
        <SideDrawerWrapper open={useAppSelector(selectRightDrawer)} variant={'RIGHT'} />
      </div>
      <SideDrawerWrapper open={useAppSelector(selectBottomDrawer)} variant={'BOTTOM'} />
    </>
  );
};

export default AppWrapper;
