import { Nav, Navbar } from "react-bootstrap";
import "./style.css";
import { useState } from "react";
import data from "./data.js";
import Goods from "./components/Goods.js";

function App() {
  let [shoes] = useState(data);
  console.log(shoes);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navbar">
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#cart">Cart</Nav.Link>
        </Nav>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {shoes.map((v, i) => {
            return <Goods key={i} data={v} />;
          })}
        </div>
      </div>
    </>
  );
}
export default App;
