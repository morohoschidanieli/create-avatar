/* React */
import * as React from "react";

/* Collection */
import HeadCollection from "../head/HeadCollection";

/* Interfaces */
import { AvatarPartProps } from "../../interfaces/avatar";

const Head = ({ type }: AvatarPartProps) => {
  const Head = HeadCollection.find(
    (headCollection) => headCollection.name === type
  );

  return <>{Head ? <Head.component /> : <div>Error</div>}</>;
};

export default Head;
