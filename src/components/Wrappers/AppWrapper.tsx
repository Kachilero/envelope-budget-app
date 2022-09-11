import React from "react";
import LogoContainer from "../LogoContainer";

interface AppWrapperProps {}

interface AppWrapperState {}

const AppWrapper: React.FC<AppWrapperProps> = (props: AppWrapperProps) => {
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
