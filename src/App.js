import React from "react";
import "./app.css";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/CreateProduct/CreateProduct";

function App() {
  // const p = document.createElement("p");
  // p.textContent = "This is My App";
  // return p;
  // let a1 = "abcdef";

  return (
    <div>
      <CreateProduct />
      <ProductList />;
    </div>
  );
}

export default App;
