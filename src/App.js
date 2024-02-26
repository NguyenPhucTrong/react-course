import "./app.css";
import Products from "./Components/Products";

function App() {
  // const p = document.createElement("p");
  // p.textContent = "This is My App";
  // return p;
  // let a1 = "abcdef";
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <Products />
      </div>
    </div>
  );
}

export default App;
