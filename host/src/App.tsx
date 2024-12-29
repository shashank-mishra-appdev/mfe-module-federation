import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import CartCount from "./components/CartCount";
import "./index.css";

const App = () => {
  return (
    <Provider store={store}>
      <CartCount></CartCount>
    </Provider>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
