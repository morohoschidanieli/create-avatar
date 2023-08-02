import Skin from "./avatar/Skin";

import { SkinColor } from "../interfaces/skin";
import { AvatarLayout, AvatarWrapper } from "../styles/avatar";
import * as React from "react";
import { useContext } from "react";
import { AvatarContext } from "../App";
import Eyes from "./avatar/Eyes";
import Mouth from "./avatar/Mouth";
import Head from "./avatar/Head";
import Clothes from "./avatar/Clothes";

const Avatar = () => {
  const skinColor: SkinColor = "Olive";

  return (
    <AvatarLayout>
      <AvatarWrapper>
        <Skin skinColor={skinColor} />
        <Eyes />
        <Mouth />
        <Head />
        <Clothes />
      </AvatarWrapper>
    </AvatarLayout>
  );
};

export default Avatar;
