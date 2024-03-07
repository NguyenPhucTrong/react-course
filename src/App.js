import React, { useState } from "react";
import "./app.css";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/CreateProduct/CreateProduct";

const products = [
  {
    pID: 1,
    pName: "Fresh Milk",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/fresh-milk.png",
    price: 12,
  },
  {
    pID: 2,
    pName: "Cottage Cheese",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/cottage-cheese.png",
    price: 10,
  },
  {
    pID: 3,
    pName: "Brocoli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/brocoli.png",
    price: 15,
  },
  {
    pID: 4,
    pName: "oranges",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/oranges.png",
    price: 20,
  },
  {
    pID: 5,
    pName: "Olive oil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/olive-oil.png",
    price: 14,
  },
];

function App() {
  // const p = document.createElement("p");
  // p.textContent = "This is My App";
  // return p;
  // let a1 = "abcdef"

  // let [newProduct, updateProduct] = useState(null);
  let [newProductList, updateProductList] = useState(products);

  function createProduct(product) {
    console.log(product);
    updateProductList([product, ...newProductList]);
  }

  return (
    <div>
      <CreateProduct createProduct={createProduct} />
      <ProductList newProductList={newProductList} />;
    </div>
  );
}

export default App;
