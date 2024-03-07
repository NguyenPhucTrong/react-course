import ProductForm from "./ProductForm";

function CreateProduct(props) {
  function onCreateProduct(product) {
    console.log(product);
    props.createProduct(product);
  }
  return (
    <div style={{ background: "white", padding: "10px 20px" }}>
      <ProductForm CreateProduct={onCreateProduct} />
    </div>
  );
}

export default CreateProduct;
