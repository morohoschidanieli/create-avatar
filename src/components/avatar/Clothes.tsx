/* React */
import * as React from "react";

/* Collection */
import ClothesCollection from "../clothes/ClothesCollection";

/* Interfaces */
import { AvatarPartProps } from "../../interfaces/avatar";

const Clothes = ({ type }: AvatarPartProps) => {
  const Cloth = ClothesCollection.find(
    (clouthCollection) => clouthCollection.name === type
  );

  return <>{Cloth ? <Cloth.component /> : <div>Error</div>}</>;
};

export default Clothes;
