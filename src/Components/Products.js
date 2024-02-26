let productCount = 0;

let prodcuctImages = require("../images/text.png");

let isAvailable = "Available";

let style = {
  padding: "5px 20px 0  px",
  fontSize: 32,
};

let badgeClass = "badge-magrin-left-40 ";
badgeClass += isAvailable === "Available" ? "bg-success" : "bg-danger";

function displayFproductCount() {
  return productCount > 0 ? productCount : <p>Zero</p>;
}

function Products() {
  return (
    <div>
      <ul class="list-group shadow">
        <li class="list-group-item">
          <div class="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
            <div class="media-body order-2 order-lg-1">
              <h5 class="mt-0 font-weight-bold mb-2">Fresh Milk</h5>
              <p class="font-italic text-muted mb-0 small">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit fuga autem maiores necessitatibus.
              </p>
              <div class="d-flex align-items-center justify-content-start mt-1">
                <h6 style={{ color: "red" }} class="font-weight-bold my-2">
                  $120.00
                </h6>
                <button className="btn btn-primary">-</button>
                <span style={style}>{displayFproductCount()}</span>
                <button className="btn btn-primary">+</button>
                <span className={badgeClass}>{isAvailable}</span>
              </div>
            </div>
            <img
              src={prodcuctImages}
              alt="Generic placeholder image"
              width="200"
              class="ml-lg-5 order-1 order-lg-2"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Products;
