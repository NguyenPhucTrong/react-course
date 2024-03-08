// import { useState } from "react";
import Products from "./Products";

function ProductList(props) {
  // updateProductList([props.newProduct, ...products]);
  console.log(props.newProduct);
  // if (props.newProductList.length === 0) return <h3>No products available</h3>;

  return props.newProductList.length === 0 ? (
    <h3>No products available</h3>
  ) : (
    <ul class="list-group shadow">
      {props.newProductList.map((product) => {
        return (
          <Products
            key={product?.pID}
            id={product?.pID}
            name={product?.pName}
            description={product?.desc}
            isAvailable={product?.isAvailable}
            imageURL={product?.image}
            price={product?.price}
          />
        );
      })}
    </ul>
  );
}

export default ProductList;
