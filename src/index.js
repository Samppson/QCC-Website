import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const productData = [
  {
    name: "Elephant",
    Price: 10,
    Description: "Medium stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
  {
    name: "Unicorn",
    Price: 15,
    Description: "Medium stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
  {
    name: "Harry Potter",
    Price: 15,
    Description: "Medium stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
  {
    name: "Elephant",
    Price: 10,
    Description: "Medium stuffed animal",
    photoName: "/productimages/elephant.jpg",
  },
  {
    name: "Baby Yoda",
    Price: 5,
    Description: "Medium stuffed animal",
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
      <h1>Quiet Corner Crochet</h1>
    </header>
  );
}

function ProductList() {
  const products = productData;
  return (
    <main>
      <h2>Our Products</h2>
      <div>
        {products.map((product) => (
          <Products productObj={product} />
        ))}
      </div>
    </main>
  );
}

function Products(props) {
  return (
    <li>
      <img src={props.productObj.photoName} alt={props.productObj.name}></img>
      <div>
        <h3>{props.productObj.name}</h3>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
