import React from "react";
import { AppWrapper } from "./index";
import type { AppState } from "../Globals";

const DefaultProps: AppState = {
  dateTime: new Date().toString(),
  loggedIn: true,
  drawer: [{variant: 'LEFT', open: true }, {variant: 'RIGHT', open: true }, { variant: 'BOTTOM', open: false}],
  user: {
    firstName: '',
    lastName: '',
    UUID: '00001'
  }
};

const App: React.FC = (): JSX.Element => {
  // Do stuff!
  return <AppWrapper {...DefaultProps}/>;
}

export default App;
