import ProductForm from "./ProductForm";

function CreateProduct() {
  return (
    <div className="row ">
      <div
        className="col-lg-8 mx-auto"
        style={{ background: "white", padding: "10px 20px", marginBottom: 20 }}
      >
        <ProductForm />
      </div>
    </div>
  );
}

export default CreateProduct;
