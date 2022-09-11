import React from "react";
import { AppWrapper } from "./index";
import { AppState } from "../Globals";

const DefaultProps: AppState = {
  user: {},
  loggedIn: false
}

const App: React.FC = (): JSX.Element => {
  // Do stuff!
  return <AppWrapper {...DefaultProps}/>;
}

export default App;
