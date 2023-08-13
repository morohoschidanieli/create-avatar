/* React */
import * as React from "react";
import { useContext } from "react";

/* Context */
import { AvatarContext } from "../context/AvatarContext";

/* Styles */
import { AvatarActions, AvatarLayout, AvatarWrapper } from "../styles/avatar";
import { Button } from "../styles/button";

/* Components */
import Skin from "./avatar/Skin";
import Eyes from "./avatar/Eyes";
import Mouth from "./avatar/Mouth";
import Head from "./avatar/Head";
import Clothes from "./avatar/Clothes";

/* Font Awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDownload,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

/* Utils */
import downloadImage from "../utils/downloadImage";

const buttonValues = [
  { title: "Randon", icon: faShuffle },
  { title: "Code", icon: faCode },
  { title: "Download", icon: faDownload, onClickEvent: downloadImage },
];

const Avatar = () => {
  const context = useContext(AvatarContext);
  const avatarData = context![0];

  const { clothes, eyes, head, mouth, skin } = avatarData!.widgets;

  return (
    <AvatarLayout>
      <AvatarWrapper
        id="avatar-container"
        wrappershape={avatarData!.wrapperShape}
        backgroundcolor={avatarData!.background.color}
      >
        <Skin type={skin.shape} fillColor={skin.fillColor} />
        <Eyes type={eyes.shape} />
        <Mouth type={mouth.shape} />
        <Head type={head.shape} />
        <Clothes type={clothes.shape} />
      </AvatarWrapper>
      <AvatarActions>
        {buttonValues.map((buttonValue) => (
          <Button key={buttonValue.title} title={buttonValue.title}>
            <FontAwesomeIcon
              icon={buttonValue.icon}
              onClick={buttonValue.onClickEvent}
            />
          </Button>
        ))}
      </AvatarActions>
    </AvatarLayout>
  );
};

export default Avatar;
