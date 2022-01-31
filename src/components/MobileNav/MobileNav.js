import React from "react";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/Logo.js";
import {
  tees,
  sweats,
  hoodies,
  shirts,
  pants,
  jackets,
  hats,
  jewellery,
  otherShit,
  hfd004,
  hfd005,
} from "../../assets/products";

import "./MobileNav.scss";

function MobileNav({ navItemClickHandler, logoFill }) {
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
        <Logo
          className="background-logo nav light-background"
          fill={logoFill}
        />
        <Container>
          <h2 onClick={() => onNavItemClick(hfd005)}>HONEY FUCKING DIJON</h2>
          <ul>
            <li onClick={() => onNavItemClick(tees)}>FUCKING T-SHIRTS</li>
            <li onClick={() => onNavItemClick(sweats)}>FUCKING SWEATS</li>
            <li onClick={() => onNavItemClick(hoodies)}>FUCKING HOODIES</li>
            <li onClick={() => onNavItemClick(pants)}>FUCKING PANTS</li>
            <li onClick={() => onNavItemClick(jackets)}>FUCKING JACKETS</li>
            <li onClick={() => onNavItemClick(hats)}>FUCKING HATS</li>
            <li onClick={() => onNavItemClick(jewellery)}>FUCKING JEWELLERY</li>
            <li onClick={() => onNavItemClick(otherShit)}>
              FUCKING OTHER SHIT
            </li>
          </ul>
          <ul>
            <li onClick={() => onNavItemClick(hfd005)}>HFD005</li>
            <li onClick={() => onNavItemClick(hfd004)}>HFD004</li>
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
