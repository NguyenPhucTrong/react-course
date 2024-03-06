import React, { useState } from "react";
import "./app.css";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/CreateProduct/CreateProduct";

function App() {
  // const p = document.createElement("p");
  // p.textContent = "This is My App";
  // return p;
  // let a1 = "abcdef"

  let [newProduct, updateProduct] = useState(null);

  function createProduct(product) {
    console.log(product);
    updateProduct(product);
  }

  return (
    <div>
      <CreateProduct createProduct={createProduct} />
      <ProductList newProduct={newProduct} />;
    </div>
  );
}

export default App;
