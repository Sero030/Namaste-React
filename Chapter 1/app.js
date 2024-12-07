const headingJS = document.createElement("h1");
headingJS.innerHTML = "📝 Hello from JS";
headingJS.setAttribute("id", "headingFromJS");
document.getElementById("root").appendChild(headingJS);

const headingReact = React.createElement("h1",{id: "headingFromReact"},"🚀 Hello from React");
const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(headingReact);