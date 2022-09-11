import React from "react";
import LogoContainer from "../LogoContainer";
import { AppState } from "../../Globals";

interface AppWrapperProps extends AppState {
  dateTime?: string;
}

const AppWrapper: React.FC<AppWrapperProps> = (props: AppWrapperProps): JSX.Element => {
  console.log(`%cAppWrapper Props: `, 'color:orange', props);
  return (
    <div className="h-screen w-screen">
      <LogoContainer />
      <div className="md:container mx-auto flex items-center justify-center h-auto">
        <p className="text-3xl">React + Tailwind + Typescript</p>
      </div>
    </div>
  );
};

export default AppWrapper;
