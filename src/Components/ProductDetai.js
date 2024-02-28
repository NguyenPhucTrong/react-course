import React, { createElement } from "react";
import Button from "./button";

let productCount = 0;

let style = {
  padding: "5px 20px 0  px",
  fontSize: 32,
};

function displayFproductCount() {
  return productCount > 0 ? productCount : "Zero";
}

function ProductDetai(prop) {
  let badgeClass = "badge-magrin-left-40 ";
  badgeClass += prop.isAvailable ? "bg-success" : "bg-danger";
  // return (
  //   <div class="d-flex align-items-center justify-content-start mt-1">
  //     <h6 style={{ color: "red" }} class="font-weight-bold my-2">
  //       {prop.price}
  //     </h6>
  //     <Button>-</Button>
  //     <span style={style}>{displayFproductCount()}</span>
  //     <Button>+</Button>

  //     <span className={badgeClass}>
  //       {prop.isAvailable ? "Available" : "UnAvailable"}
  //     </span>
  //   </div>
  // );
  return React.createElement(
    "div",
    {
      className: "d-flex align-items-center justify-content-start mt-1",
    },
    React.createElement(
      "h6",
      { className: "font-weight-bold my-2", style: { marginRight: 30 } },
      "$" + prop.price
    ),
    createElement(Button, {}, "-"),
    React.createElement(
      "span",
      {
        style: { padding: "5px 20px 0  px", fontSize: 32 },
      },
      displayFproductCount()
    ),
    React.createElement(Button, {}, "+"),
    React.createElement(
      "span",
      {
        className: badgeClass,
      },
      prop.isAvailable ? "Available" : "UnAvailable"
    )
  );
}

export default ProductDetai;
