import React, { useState } from "react";
import "./Page.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product/Product";
import {
  tees,
  sweats,
  hoodies,
  otherShit,
  allProducts,
} from "../assets/products";
import Logo from "../assets/images/Logo.js";
import MobileNav from "../components/MobileNav/MobileNav";

function App() {
  const [visibleProducts, setVisbleProducts] = useState(allProducts);

  function navItemClickHandler(productsToShow) {
    setVisbleProducts(productsToShow);
  }

  return (
    <div className="App">
      <Logo className="background-logo" fill="#FFCFD0" />
      <Container>
        <MobileNav navItemClickHandler={navItemClickHandler} />
        <h1 onClick={() => setVisbleProducts(allProducts)}>
          HONEY FUCKING DIJON
        </h1>
      </Container>

      <Container>
        <Row>
          <Col lg={3} className="sidebar">
            <ul>
              <li onClick={() => setVisbleProducts(tees)}>FUCKING T-SHIRTS</li>
              <li onClick={() => setVisbleProducts(sweats)}>
                FUCKING SWEATS
              </li>
              <li onClick={() => setVisbleProducts(hoodies)}>
                FUCKING HOODIES
              </li>
              <li onClick={() => setVisbleProducts(otherShit)}>
                FUCKING OTHER SHIT
              </li>
            </ul>
            <div>DOVER STREET MARKET</div>
            <div>COMME des GARÇONS</div>
            <div className="copyright">&copy; HONEY FUCKING DIJON 2021</div>
          </Col>
          <Col>
            <Row>
              {visibleProducts.map((product, i) => (
                <Col lg={4} key={`${product.id}-${i}`}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
