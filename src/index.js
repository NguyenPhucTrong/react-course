import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// const header = <h1> This is my first React App</h1>;
const header2 = <h1> This is my first React App2</h1>;

// // console.log(header);

// ReactDOM.render(header, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// root.render(header2);
// let div = document.getElementById("root");
// div.append(App());
