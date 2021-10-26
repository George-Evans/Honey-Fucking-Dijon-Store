import React from "react";
import Image from "react-bootstrap/Image";
import StoreDropdown from "../StoreDropdown/StoreDropdown";

import "./Product.scss";

function Product({ product }) {
  return (
    <div className="Product">
      <Image src={product.img} alt={product.id} fluid></Image>
      <StoreDropdown links={product.links} buyInStore={product.buyInStore} />
    </div>
  );
}

export default Product;
