import React, { useEffect, useState } from "react";
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
  const [dateTimeValue, setDateTimeValue] = useState<string>(dateTime);
  const [leftDrawerOpen, setLeftDrawerOpen] = useState<boolean>(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState<boolean>(false);
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState<boolean>(false);
  
  /**
   * Set dateTime if it hasn't been set, and set the drawer states from memory
   * */
  useEffect(() => {
    if (!dateTime) {
      setDateTimeValue(new Date().toString());
    }
    
    drawer.map((item) => {
      switch (item.variant) {
        case 'LEFT':
          setLeftDrawerOpen(item.open);
          break;
        case 'RIGHT':
          setRightDrawerOpen(item.open);
          break;
        case 'BOTTOM':
          setBottomDrawerOpen(item.open);
          break;
        default:
          setLeftDrawerOpen(true);
          break;
      }
    })
  },[])
  
  /**
   * Toggles Bottom drawer state
   * */
  const toggleBottomDrawer = (): void => {
    setBottomDrawerOpen(!bottomDrawerOpen);
  }
  
  /**
   * Toggles Left drawer state
   * */
  const toggleLeftDrawer = (): void => {
    setLeftDrawerOpen(!leftDrawerOpen);
  }
  
  /**
   * Toggles Right drawer state
   * */
  const toggleRightDrawer = (): void => {
    setRightDrawerOpen(!rightDrawerOpen)
  }
  
  console.log(`%cAppWrapper Props: `, 'color:orange', props);
  return (
    <>
      <div className="h-screen max-w-full flex flex-row text-slate-50 bg-slate-800 mx-auto transition-all ">
        <SideDrawerWrapper open={leftDrawerOpen} variant={'LEFT'} />
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
          <button onClick={toggleLeftDrawer}>{leftDrawerOpen ? 'CLOSE' : 'OPEN'} LEFT DRAWER</button>
          <button onClick={toggleRightDrawer}>{rightDrawerOpen ? 'CLOSE' : 'OPEN'} RIGHT DRAWER</button>
          <button onClick={toggleBottomDrawer}>{bottomDrawerOpen ? 'CLOSE' : 'OPEN'} BOTTOM DRAWER</button>
        </div>
        <SideDrawerWrapper open={rightDrawerOpen} variant={'RIGHT'} />
      </div>
      <SideDrawerWrapper open={bottomDrawerOpen} variant={'BOTTOM'} />
    </>
  );
};

export default AppWrapper;
