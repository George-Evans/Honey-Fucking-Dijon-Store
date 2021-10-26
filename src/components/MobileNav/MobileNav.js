import React from "react";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/Logo.js";
import {
  tees,
  sweats,
  hoodies,
  otherShit,
  allProducts,
} from "../../assets/products";

import "./MobileNav.scss";

function MobileNav({ navItemClickHandler }) {
  function hamburgerToggle(inputIsChecked) {
    inputIsChecked ? lockBodyScrolling() : unlockBodyScrolling();
  }

  function lockBodyScrolling() {
    document.body.classList.add("no-scroll");
  }

  function unlockBodyScrolling() {
    document.body.classList.remove("no-scroll");
  }

  function onNavItemClick(navTarget) {
    navItemClickHandler(navTarget);
    unlockBodyScrolling();
    document.getElementById("burger").checked = false;
  }

  return (
    <header>
      <input
        id="burger"
        type="checkbox"
        onChange={(e) => hamburgerToggle(e.target.checked)}
      />

      <label htmlFor="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav className="mobile-nav">
        <Logo className="background-logo nav" fill="#fbafa6" />
        <Container>
          <h2 onClick={() => onNavItemClick(allProducts)}>
            HONEY FUCKING DIJON
          </h2>
          <ul>
            <li onClick={() => onNavItemClick(tees)}>FUCKING T-SHIRTS</li>
            <li onClick={() => onNavItemClick(sweats)}>FUCKING T-SWEATS</li>
            <li onClick={() => onNavItemClick(hoodies)}>FUCKING T-HOODIES</li>
            <li onClick={() => onNavItemClick(otherShit)}>
              FUCKING OTHER SHIT
            </li>
          </ul>
          <div>DOVER STREET MARKET</div>
          <div>COMME des GARÇONS</div>
          <div className="copyright">&copy; HONEY FUCKING DIJON 2021</div>
        </Container>
      </nav>
    </header>
  );
}

export default MobileNav;