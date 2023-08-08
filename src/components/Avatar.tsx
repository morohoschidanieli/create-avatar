import Skin from "./avatar/Skin";

import { AvatarLayout, AvatarWrapper } from "../styles/avatar";
import * as React from "react";
import { useContext } from "react";
import { AvatarContext } from "../App";
import Eyes from "./avatar/Eyes";
import Mouth from "./avatar/Mouth";
import Head from "./avatar/Head";
import Clothes from "./avatar/Clothes";
import html2canvas from "html2canvas";

const Avatar = () => {
  const context = useContext(AvatarContext);
  const avatarData = context?.[0];

  const downloadImage = () => {
    const avatarId = document.getElementById("avatar-container") as HTMLElement;

    html2canvas(avatarId, { backgroundColor: null }).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "avatar.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };
  return (
    <AvatarLayout>
      <AvatarWrapper
        id="avatar-container"
        wrappershape={avatarData?.wrapperShape}
        backgroundcolor={avatarData?.background.color}
      >
        {avatarData !== undefined && (
          <Skin color={avatarData.widgets.skin.fillColor} />
        )}
        <Eyes />
        <Mouth />
        <Head />
        <Clothes />
      </AvatarWrapper>
      {/* <button onClick={() => downloadImage()}>Downlaod</button> */}
    </AvatarLayout>
  );
};

export default Avatar;
