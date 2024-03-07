import { useState } from "react";
import Products from "./Products";

function ProductList(props) {
  // updateProductList([props.newProduct, ...products]);
  console.log(props.newProduct);
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <ul class="list-group shadow">
          {props.newProductList.map((product) => {
            return (
              <Products
                id={product.pID}
                name={product.pName}
                description={product.desc}
                isAvailable={product.isAvailable}
                imageURL={product.image}
                price={product.price}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
