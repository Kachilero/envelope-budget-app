import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";

const container = document.getElementById('app-main');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(<App />);
