import React from "react";
import BlockItems from "./BlockItems";
import { blockItemsA } from "../assets/assets";
import bgimageA from "../assets/image 92.png";

const BlockItemsGroupA = () => {
  return (
    <BlockItems
  title="Electronics and gadgets"
        items={blockItemsA}
        bgImage={bgimageA}
/>
  );
};

export default BlockItemsGroupA;