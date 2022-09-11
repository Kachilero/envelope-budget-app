import React from "react";
import { AppWrapper } from "./index";
import { AppState } from "../Globals";

const DefaultProps: AppState = {
  user: {
    firstName: 'First Name',
    lastName: 'Last Name',
    UUID: '00001'
  },
  loggedIn: true
}

const App: React.FC = (): JSX.Element => {
  // Do stuff!
  return <AppWrapper {...DefaultProps}/>;
}

export default App;
