import React, { useState } from "react";
import Button from "./button";

let style = {
  padding: "20px 10px",
  fontSize: 32,
};

function ProductDetai(prop) {
  console.log("ProductDetai");
  let badgeClass = "badge-magrin-left-40 ";
  badgeClass += prop.isAvailable ? "bg-success" : "bg-danger";

  // let productCount = 0;

  let [productCount, updateCount] = useState(0);
  function displayFproductCount() {
    return productCount > 0 ? productCount : "Zero";
  }

  let incrementPorductCount = function () {
    updateCount(++productCount);
  };

  let decrementPorductCount = function () {
    updateCount(--productCount);
  };

  // let quantityHandler = function (product) {
  //   console.log(prop.quantity);
  //   return ;
  // };

  // console.log(quantityHandler);
  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
      <h6 style={{ color: "red" }} className="font-weight-bold my-2">
        {prop.price}
      </h6>
      <Button evenHandler={decrementPorductCount} disable={productCount <= 0}>
        -
      </Button>
      <span style={style}>{displayFproductCount()}</span>
      <Button
        evenHandler={incrementPorductCount}
        disable={productCount === prop.quantity}
      >
        +
      </Button>

      <span className={badgeClass}>
        {prop.isAvailable ? "Available" : "UnAvailable"}
      </span>
    </div>
  );
}

export default ProductDetai;
// return React.createElement(
//   "div",
//   {
//     className: "d-flex align-items-center justify-content-start mt-1",
//   },
//   React.createElement(
//     "h6",
//     { className: "font-weight-bold my-2", style: { marginRight: 30 } },
//     "$" + prop.price
//   ),
//   createElement(Button, {}, "-"),
//   React.createElement(
//     "span",
//     {
//       style: { padding: "5px 20px 0  px", fontSize: 32 },
//     },
//     displayFproductCount()
//   ),
//   React.createElement(Button, {}, "+"),
//   React.createElement(
//     "span",
//     {
//       className: badgeClass,
//     },
//     prop.isAvailable ? "Available" : "UnAvailable"
//   )
// );
