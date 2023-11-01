import * as React from "react";
import { EyeCollection } from "@collections";
import { AvatarPartProps } from "@interfaces/avatar";

const Eyes = ({ type }: AvatarPartProps) => {
  const Eye = EyeCollection.find(
    (eyeCollection) => eyeCollection.name === type
  );

  return <>{Eye ? <Eye.component /> : <div>Error</div>}</>;
};

export default Eyes;
