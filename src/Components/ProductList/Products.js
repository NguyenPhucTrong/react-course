import React from "react";
import ProductDetai from "./ProductDetai";

function Products(prop) {
  return (
    <div>
      <li
        class="list-group-item"
        style={{ backgroundColor: prop.isAvailable ? "white" : "#dedede" }}
      >
        <div class="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
          <div class="media-body order-2 order-lg-1">
            <h5 class="mt-0 font-weight-bold mb-2">{prop.name}</h5>
            <p class="font-italic text-muted mb-0 small">{prop.description}</p>

            <ProductDetai price={prop.price} isAvailable={prop.isAvailable} />
          </div>
          <img
            src={prop.imageURL}
            alt="Generic placeholder image"
            width="200"
            class="ml-lg-5 order-1 order-lg-2"
          />
        </div>
      </li>
    </div>
  );
}

export default Products;
