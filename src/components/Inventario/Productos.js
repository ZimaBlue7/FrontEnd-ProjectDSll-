import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Nabvar";
import { Row, Col } from "react-bootstrap";
import { productsArray } from "./productStore";
import ProductCard from "./ProductCard";

import CartProvider from "./CartContext";
// localhost:3000 -> Home
// localhost:3000/success -> Success
const Productos = () => {
  return (
    <>
      <CartProvider>
        <NavbarComponent></NavbarComponent>

        <h1 align="center" className="p-3">
          Welcome to the store!
        </h1>
        <Row xs={1} md={3} className="g-4">
          {productsArray.map((product, idx) => (
            <Col align="center" key={idx}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </CartProvider>
    </>
  );
};

export default Productos;
