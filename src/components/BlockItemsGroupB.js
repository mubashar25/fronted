import React from "react";
import BlockItems from "./BlockItems";
import { blockItemsB } from "../assets/assets";
import bgimageB from "../assets/image 98.png";

const BlockItemsGroupB = () => {
  return (
    <BlockItems
      title="Electronics and gadgets"
      items={blockItemsB}
      bgImage={bgimageB}
    />
  );
};

export default BlockItemsGroupB;