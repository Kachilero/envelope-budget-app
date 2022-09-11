import React, { useEffect, useState } from "react";
import type { AppState } from "../../Globals";
import { SideDrawerWrapper } from "../index";

const AppWrapper: React.FC<AppState> = (props: AppState): JSX.Element => {
  const { user, loggedIn, drawer, dateTime } = props;
  const [dateTimeValue, setDateTimeValue] = useState<string>(dateTime);
  
  useEffect(() => {
    if (!dateTime) {
      setDateTimeValue(new Date().toString());
    }
    Object.keys(drawer).map((wrapper, idx) => {
      console.log(`%cMapping the Drawer Wrapper: %c${idx}`,
        'color:pink',
        'color:lightgreen',
        wrapper
      );
    })
  },[])
  
  console.log(`%cAppWrapper Props: `, 'color:orange', props);
  return (
    <div className="h-screen max-w-full flex flex-row text-slate-50 bg-slate-800 mx-auto">
      
      <SideDrawerWrapper variant={'LEFT'} open={true}/>
      
      
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
      </div>
      
    </div>
  );
};

export default AppWrapper;
