import * as React from "react";
import { AvatarPartProps } from "@interfaces/avatar";

const generateAvatarPart = (collection: any[]) => {
  return ({ type }: AvatarPartProps) => {
    const Part = collection.find((part) => part.name === type);

    return <>{Part ? <Part.component /> : <div>Error</div>}</>;
  };
};

export default generateAvatarPart;
