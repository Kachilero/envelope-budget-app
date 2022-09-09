import React from "react";
import LogoContainer from "./LogoContainer";

const App = () => {
  return (
    <div className="md:container mx-auto flex items-center justify-center h-screen">
      <LogoContainer />
      <p className="trouble text-3xl">React + Tailwind + Typescript</p>
    </div>
  )
}

export default App;
