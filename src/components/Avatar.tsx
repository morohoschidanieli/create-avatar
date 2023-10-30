import * as React from "react";
import { useContext } from "react";
import { AvatarActions, AvatarLayout, AvatarWrapper } from "@styles/avatar";
import { Button } from "@styles/button";
import { Clothes, Eyes, Head, Mouth, Skin } from "@components";
import { downloadImage } from "@utils";
import { AvatarContext } from "@context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDownload,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

const buttonValues = [
  { title: "Random", icon: faShuffle },
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
        <Head type={head.shape} fillColor={head.fillColor} />
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
