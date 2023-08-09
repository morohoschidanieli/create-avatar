/* React */
import * as React from "react";
import { useContext } from "react";

/* Context */
import { AvatarContext } from "../context/AvatarContext";

/* Styles */
import { AvatarActions, AvatarLayout, AvatarWrapper } from "../styles/avatar";

/* Components */
import Skin from "./avatar/Skin";
import Eyes from "./avatar/Eyes";
import Mouth from "./avatar/Mouth";
import Head from "./avatar/Head";
import Clothes from "./avatar/Clothes";

/* HTML2canvas */
import html2canvas from "html2canvas";
import { Button } from "../styles/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDownload,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

const Avatar = () => {
  const context = useContext(AvatarContext);
  const avatarData = context?.[0];
  const { clothes, eyes, head, mouth, skin } = avatarData?.widgets;
  console.log(eyes);
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
        <Skin type={skin.shape} fillColor={skin.fillColor} />
        <Eyes type={eyes.shape} />
        <Mouth type={mouth.shape} />
        <Head type={head.shape} />
        <Clothes type={clothes.shape} />
      </AvatarWrapper>
      <AvatarActions>
        <Button title="Random">
          <FontAwesomeIcon icon={faShuffle} />
        </Button>
        <Button title="Code">
          <FontAwesomeIcon icon={faCode} />
        </Button>
        <Button title="Download" onClick={() => downloadImage()}>
          <FontAwesomeIcon icon={faDownload} />
        </Button>
      </AvatarActions>
    </AvatarLayout>
  );
};

export default Avatar;
