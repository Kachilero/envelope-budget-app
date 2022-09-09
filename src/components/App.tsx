import React from "react";
import LogoContainer from "./LogoContainer";

const App = () => {
  return (
    <>
      <div className="md:container mx-auto flex items-center justify-center h-auto">
        <LogoContainer />
      </div>
      <div className="md:container mx-auto flex items-center justify-center h-auto">
        <p className="text-3xl">React + Tailwind + Typescript</p>
      </div>
    </>
)
}

export default App;
