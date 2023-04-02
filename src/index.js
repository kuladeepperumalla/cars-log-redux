import React from "react";
import { createRoot} from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store";

const rootElemnt = document.getElementById("root");
const root = createRoot(rootElemnt);
root.render(
    <Provider store = {store}>
        <App />
    </Provider>
)