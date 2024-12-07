import React from "react";
import ReactDOM from "react-dom/client";

const headerReact = React.createElement("div",{id:"react-div"},[
    React.createElement("h1",{id:"react-h1"},"Hello from h1 React"),
    React.createElement("h2",{id:"react-h2"},"Hello from h2 React"),
    React.createElement("h3",{id:"react-h3"},"Hello from h3 React")]);

const rootReact = ReactDOM.createRoot(document.getElementById("root-react"));
rootReact.render(headerReact);

const headerElementJSX = (<div>
    <h1>Hello h1 from JSX Element</h1>
    <h2>Hello h2 from JSX Element</h2>
    <h3>Hello h3 from JSX Element</h3>
</div>);

const HeaderComponentJSX = () => (<div>
    {headerElementJSX}
    <h1 id = "h1-jsx">Hello h1 from JSX Component</h1>
    <h2>Hello h2 from JSX Component</h2>
    <h3>Hello h3 from JSX Component {100+100}</h3>
</div>);

const rootComponentJSX = ReactDOM.createRoot(document.getElementById("root-jsx"));
rootComponentJSX.render(<HeaderComponentJSX />);




