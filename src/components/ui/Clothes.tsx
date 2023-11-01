import * as React from "react";
import { ClothesCollection } from "@collections";
import { AvatarPartProps } from "@interfaces/avatar";

const Clothes = ({ type }: AvatarPartProps) => {
  const Cloth = ClothesCollection.find(
    (clouthCollection) => clouthCollection.name === type
  );

  return <>{Cloth ? <Cloth.component /> : <div>Error</div>}</>;
};

export default Clothes;
