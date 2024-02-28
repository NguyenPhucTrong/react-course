import "./app.css";
import Products from "./Components/Products";

const producrs = [
  {
    pID: 1,
    pName: "Fresh Milk",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: require("./images/fresh-milk.png"),
    price: 12,
  },
  {
    pID: 2,
    pName: "Cottage Cheese",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: require("./images/cottage-cheese.png"),
    price: 10,
  },
  {
    pID: 3,
    pName: "Brocoli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/brocoli.png",
    price: 15,
  },
  {
    pID: 4,
    pName: "oranges",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/oranges.png",
    price: 20,
  },
  {
    pID: 5,
    pName: "Olive oil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/olive-oil.png",
    price: 14,
  },
];

function App() {
  // const p = document.createElement("p");
  // p.textContent = "This is My App";
  // return p;
  // let a1 = "abcdef";
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <ul class="list-group shadow">
          <Products
            id={producrs[0].pID}
            name={producrs[0].pName}
            description={producrs[0].desc}
            isAvailable={producrs[0].isAvailable}
            imageURL={producrs[0].image}
            price={producrs[0].price}
          />
          <Products
            id={producrs[1].pID}
            name={producrs[1].pName}
            description={producrs[1].desc}
            isAvailable={producrs[1].isAvailable}
            imageURL={producrs[1].image}
            price={producrs[1].price}
          />
        </ul>
      </div>
    </div>
  );
}

export default App;
