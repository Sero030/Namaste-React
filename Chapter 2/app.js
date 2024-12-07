import React from "react";
import ReactDOM from "react-dom/client";

const headingReact = React.createElement("h1",{id: "headingFromReact"},"🚀 Hello from React");
const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(headingReact);