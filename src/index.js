import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const productData = [
  {
    name: "Elephant",
    price: 10,
    description: "Medium stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
  {
    name: "Unicorn",
    price: 15,
    description: "Medium stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
  {
    name: "Harry Potter",
    price: 15,
    description: "Medium stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
  {
    name: "Elephant",
    price: 10,
    description: "Medium stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
  {
    name: "Baby Yoda",
    price: 5,
    description: "Medium stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
  {
    name: "Dinosaur",
    price: 15,
    description: "Large stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
  {
    name: "Sheep",
    price: 10,
    description: "Medium stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
  {
    name: "Octopus",
    price: 10,
    description: "Medium stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
  {
    name: "Bear",
    price: 10,
    description: "Medium stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
  {
    name: "Giraffe",
    price: 10,
    description: "Medium stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
];

function App() {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="constrain">
        <h1>
          <a href="/index.html">
            <span>Quiet Corner Crochet</span>
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="/index.html">Home</a>
            </li>
            <li>
              <a href="/index.html">Products</a>
            </li>
            <li>
              <a href="/index.html">Upcoming Events</a>
            </li>
            <li>
              <a href="/index.html">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function ProductList() {
  const products = productData;
  return (
    <main>
      <h2 className="product-header">Our Products</h2>
      <div className="productli">
        {products.map((product) => (
          <Cards productObj={product} />
        ))}
      </div>
    </main>
  );
}

function Products(props) {
  return (
    <ul className="productul">
      <li>
        <img
          className="products"
          src={props.productObj.photoName}
          alt={props.productObj.name}
        ></img>
        <h3>{props.productObj.name}</h3>
      </li>
    </ul>
  );
}

function Cards(props) {
  return (
    <div className="card">
      <img
        src={props.productObj.photoName}
        class="card-img-top"
        alt={props.productObj.name}
      ></img>
      <div className="card-body">
        <h5 className="card-title">
          {props.productObj.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $
          {props.productObj.price}
        </h5>
        <p className="card-text">{props.productObj.description}</p>
        <a href="#" className="btn btn-primary">
          Buy!
        </a>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
