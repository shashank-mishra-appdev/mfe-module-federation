import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/Button";

import "./index.css";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <>
      <Button label="Add To Cart" onClick={handleClick} />
    </>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
