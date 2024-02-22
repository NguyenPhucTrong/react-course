import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

// const header = <h1> This is my first React App</h1>;
// const header2 = <h1> This is my first React App2</h1>;

// // console.log(header);

// ReactDOM.render(header, document.getElementById("root"));
// ReactDOM.render(header2, document.getElementById("text"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// let div = document.getElementById("root");
// div.append(App());
