/* React */
import * as React from "react";

/* Collection */
import EyeCollection from "../eyes/EyeCollection";

/* Interfaces */
import { AvatarPartProps } from "../../interfaces/avatar";

const Eyes = ({ type }: AvatarPartProps) => {
  const Eye = EyeCollection.find(
    (eyeCollection) => eyeCollection.name === type
  );

  return <>{Eye ? <Eye.component /> : <div>Error</div>}</>;
};

export default Eyes;
