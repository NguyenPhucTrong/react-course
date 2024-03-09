import React from "react";
function Button(prop) {
  console.log("btn ProductDetai");

  return (
    <button
      onClick={prop.evenHandler}
      className="btn btn-primary"
      disabled={prop.disabled}
    >
      {prop.children}
    </button>
  );
}

export default Button;
