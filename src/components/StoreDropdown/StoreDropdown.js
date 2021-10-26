import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./StoreDropdown.scss";

function StoreDropdown({ links, buyInStore }) {
  const buyText = buyInStore ? "BUY IN STORE" : "BUY";
  return (
    <DropdownButton title={buyText} className="StoreDropdown">
      {links.map((link, i) => (
        <Dropdown.Item
          href={link.src}
          key={i}
        >{`VIA DSM ${link.store.toUpperCase()}`}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default StoreDropdown;
