import React from "react";
import LogoContainer from "../LogoContainer";
import type { AppState } from "../../Globals";

interface AppWrapperProps extends AppState {
  dateTime?: string;
}

const AppWrapper: React.FC<AppWrapperProps> = (props: AppWrapperProps): JSX.Element => {
  console.log(`%cAppWrapper Props: `, 'color:orange', props);
  console.log(`%cUser Keys: `, 'color:orange', Object.keys(props.user))
  return (
    <div className="h-screen w-screen">
      <LogoContainer />
      <div className="md:container mx-auto flex items-center justify-center h-auto">
        <p className="text-3xl">The User:</p>
      </div>
      <div className="md:container mx-auto flex flex-col items-center justify-center h-auto">
        <div>Logged In: <span className="text-green-500">{props.loggedIn.toString()}</span></div>
        {Object.keys(props.user).map((userProp, idx) => {
          console.log(`%cUser Prop: %c${userProp} %c= `,
            'color:orange', 'color:lightgreen',
            props.user[userProp]
          );
          return (
            <div key={idx}>
              {userProp}: <span className="text-green-500">{props.user[userProp]}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default AppWrapper;
