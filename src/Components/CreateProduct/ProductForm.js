// document.getElementById("name").addEventListener( );
import React, { useState } from "react";

function ProductForm(props) {
  let [pName, updateName] = useState("");
  let [pPrice, updatePrice] = useState("");
  let [pDescription, updateDescription] = useState("");
  let [pAvailable, updateAvailable] = useState(false);
  let [pImage, updateImage] = useState("");
  let [pQuantity, updateQuantity] = useState("");

  function nameInputHandler(event) {
    // pName = event.target.value;
    updateName(event.target.value);
  }
  function priceInputHandler(event) {
    updatePrice(event.target.value);
  }
  function descriptionInputHandler(event) {
    updateDescription(event.target.value);
  }
  function availableInputHandler(event) {
    updateAvailable(event.target.checked);
  }
  function imageInputHandler(event) {
    updateImage(event.target.value);
  }
  function quantityInputHandler(event) {
    updateQuantity(event.target.value);
  }

  function createProductEventHandler(event) {
    event.preventDefault();
    let product = {
      pName: pName,
      desc: pDescription,
      isAvailable: Boolean(pAvailable),
      image: pImage,
      price: Number(pPrice),
      quantity: Number(pQuantity),
    };

    updateName("");
    updateDescription("");
    updateAvailable(false);
    updatePrice("");
    updateImage("");
    updateQuantity("");

    console.log(product);
    props.CreateProduct(product);
    props.onCancel();
  }

  return (
    <form className="row g-3" onSubmit={createProductEventHandler}>
      <div className="col-md-6">
        <label for="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={pName}
          placeholder="Product Name"
          onChange={nameInputHandler}
        />
      </div>
      <div className="col-md-6">
        <label for="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          value={pPrice}
          placeholder="Product Price"
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label for="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          value={pDescription}
          onChange={descriptionInputHandler}
        />
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          value={pQuantity}
          onChange={availableInputHandler}
        />
        <label className="form-check-label" for="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="col-md-6">
        <label for="price">Quantity</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          value={pPrice}
          placeholder="Product quantity"
          onChange={quantityInputHandler}
        />
      </div>

      <div className="form-group">
        <label for="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          value={pImage}
          onChange={imageInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
}
export default ProductForm;
