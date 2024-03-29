import React, { useState } from "react";
import "./app.css";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import FilterProduct from "./filterProduct/filterProduct";

const products = [
  {
    pID: 1,
    pName: "Fresh Milk",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/fresh-milk.png",
    quantity: 10,
    price: 12,
  },
  {
    pID: 2,
    pName: "Cottage Cheese",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/cottage-cheese.png",
    quantity: 15,
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
  let [newProductList, updateProductList] = useState(products);

  let [filterTextValue, updateFilterValue] = useState("all");

  let filterProductList = newProductList.filter((product) => {
    if (filterTextValue === "available") {
      return product.isAvailable === true;
    } else if (filterTextValue === "unavailable") {
      return product.isAvailable === false;
    } else {
      return product;
    }
  });

  function createProduct(product) {
    console.log(product);
    product.pID = newProductList.length + 1;
    updateProductList([product, ...newProductList]);
  }

  function onFilterValueSelected(filterValue) {
    updateFilterValue(filterValue);
  }

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <CreateProduct createProduct={createProduct} />
        <FilterProduct filterValueSelected={onFilterValueSelected} />
        <ProductList newProductList={filterProductList} />;
      </div>
    </div>
  );
}

export default App;
