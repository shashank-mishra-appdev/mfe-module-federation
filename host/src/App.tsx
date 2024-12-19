import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const RemoteButton = React.lazy(() => import("remoteApp/Button"));

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="container card">
      <div className="d-flex">
        <div className="flex-grow">Name: Host Application</div>
        <div>Item Count : {count}</div>
      </div>
      <RemoteButton label="Add To Cart" onClick={handleClick} />
    </div>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
