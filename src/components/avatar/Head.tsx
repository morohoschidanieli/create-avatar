import * as React from "react";
import { HeadCollection } from "@components";
import { AvatarPartProps } from "@interfaces/avatar";

const Head = ({ type, fillColor }: AvatarPartProps) => {
  const Head = HeadCollection.find(
    (headCollection) => headCollection.name === type
  );

  return (
    <>{Head ? <Head.component fillColor={fillColor!} /> : <div>Error</div>}</>
  );
};

export default Head;
