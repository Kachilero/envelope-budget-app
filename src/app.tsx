import React from "react";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app-main');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

const Msg = () => (
  <div>
    <h2>This is the React Code!!!</h2>
  </div>
);

root.render(<Msg />);