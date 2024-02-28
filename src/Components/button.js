import React from "react";
function Button(prop) {
  return <button className="btn btn-primary">{prop.children}</button>;
}

export default Button;
