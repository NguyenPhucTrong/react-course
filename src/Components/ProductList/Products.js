import React from "react";
import ProductDetai from "./ProductDetai";

function Products(prop) {
  return (
    <div>
      <li
        className="list-group-item"
        style={{ backgroundColor: prop.isAvailable ? "white" : "#dedede" }}
      >
        <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
          <div className="media-body order-2 order-lg-1">
            <h5 className="mt-0 font-weight-bold mb-2">{prop.name}</h5>
            <p className="font-italic text-muted mb-0 small">
              {prop.description}
            </p>

            {/* Chuyền dữ liệu vào ProductDetai  */}
            <ProductDetai
              price={prop.price}
              isAvailable={prop.isAvailable}
              quantity={prop.quantity}
            />
          </div>
          <image
            src={prop.imageURL}
            alt="Generic placeholder image"
            width="200"
            className="ml-lg-5 order-1 order-lg-2"
          />
        </div>
      </li>
    </div>
  );
}

export default Products;
