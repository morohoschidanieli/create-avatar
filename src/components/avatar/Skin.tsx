/* React */
import * as React from "react";

/* Collection */
import SkinCollection from "../skin/SkinCollection";

/* Interfaces */
import { AvatarPartProps, SkinProps2 } from "../../interfaces/avatar";

const Skin = ({ type, fillColor }: SkinProps2) => {
  const Skin = SkinCollection.find(
    (skinCollection) => skinCollection.name === type
  );

  return (
    <>{Skin ? <Skin.component fillColor={fillColor} /> : <div>Error</div>}</>
  );
};

export default Skin;
