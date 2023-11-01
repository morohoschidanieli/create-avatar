import * as React from "react";
import { MouthCollection } from "@collections";
import { AvatarPartProps } from "@interfaces/avatar";

const Mouth = ({ type }: AvatarPartProps) => {
  const Mouth = MouthCollection.find(
    (mouthCollection) => mouthCollection.name === type
  );

  return <>{Mouth ? <Mouth.component /> : <div>Error</div>}</>;
};

export default Mouth;
