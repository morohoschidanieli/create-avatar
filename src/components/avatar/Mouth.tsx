/* React */
import * as React from "react";

/* Collection */
import MouthCollection from "../mouth/MouthCollection";

/* Interfaces */
import { AvatarPartProps } from "../../interfaces/avatar";

const Mouth = ({ type }: AvatarPartProps) => {
  const Mouth = MouthCollection.find(
    (mouthCollection) => mouthCollection.name === type
  );

  return <>{Mouth ? <Mouth.component /> : <div>Error</div>}</>;
};

export default Mouth;
