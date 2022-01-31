import {
  tees_004,
  sweats_004,
  jackets_004,
  jewellery_004,
  otherShit_004,
} from "./004";

import {
  tees_005,
  sweats_005,
  hoodies_005,
  jackets_005,
  shirts_005,
  pants_005,
  hats_005,
  otherShit_005,
} from "./005";

const hfd004 = [
  ...tees_004,
  ...sweats_004,
  ...jackets_004,
  ...jewellery_004,
  ...otherShit_004,
];

const hfd005 = [
  ...tees_005,
  ...sweats_005,
  ...hoodies_005,
  ...jackets_005,
  ...shirts_005,
  ...pants_005,
  ...hats_005,
  ...otherShit_005,
];

const tees = [...tees_005, ...tees_004];
const sweats = [...sweats_005, ...sweats_004];
const hoodies = hoodies_005;
const jackets = [...jackets_005, ...jackets_004];
const shirts = shirts_005;
const pants = pants_005;
const hats = hats_005;
const jewellery = jewellery_004;
const otherShit = [...otherShit_005, ...otherShit_004];

export {
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
};
