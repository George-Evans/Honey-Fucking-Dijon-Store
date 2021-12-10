import { tees } from "./tees";
import { sweats } from "./sweats";
import { otherShit } from "./otherShit";
import { jackets } from "./jackets";
import { jewellery } from "./jewellery";

const allProducts = [
  ...tees,
  ...sweats,
  ...jackets,
  ...jewellery,
  ...otherShit,
];

export { tees, sweats, jackets, jewellery, otherShit, allProducts };
