import React from "react";
import { createRoot} from 'react-dom/client';
import App from './App'

const rootElemnt = document.getElementById("root");
const root = createRoot(rootElemnt);
root.render(
    <App />
)