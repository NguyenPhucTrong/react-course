import { useState } from "react";
import ProductForm from "./ProductForm";

function CreateProduct(props) {
  let [showForm, updateShowForm] = useState(false);
  function onCreateProduct(product) {
    console.log(product);
    props.createProduct(product);
  }

  function onCreateNewProduct() {
    updateShowForm(true);
  }

  function onProductSubmittedOrCancelled() {
    updateShowForm(false);
  }

  return (
    <div style={{ background: "white", padding: "10px 20px" }}>
      {!showForm && (
        <button onClick={onCreateNewProduct}>Create Product</button>
      )}
      {showForm && (
        <ProductForm
          CreateProduct={onCreateProduct}
          onCancel={onProductSubmittedOrCancelled}
        />
      )}
    </div>
  );
}

export default CreateProduct;
