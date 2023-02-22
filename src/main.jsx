import React from "react";
import ReactDOM from "react-dom";

function App() {
    //document.createElement("h1");
    return (<h1>Hello World</h1>);
}
ReactDOM.createRoot(document.getElementById("root")).render(
    <ReactDOM.StrictMode>
    <App />
    </ReactDOM.StrictMode>
);