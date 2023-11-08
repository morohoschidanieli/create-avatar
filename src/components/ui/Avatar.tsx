import * as React from "react";
import { useContext } from "react";
import {
  ClothesCollection,
  EyeCollection,
  HeadCollection,
  MouthCollection,
  SkinCollection,
} from "@collections";
import { Clothes, Eyes, Head, Mouth, Skin } from "@ui";
import { downloadImage, generateRandomAvatar } from "@utils";
import { AvatarContext } from "@context";
import {
  AvatarActions,
  AvatarLayout,
  AvatarWrapper,
  Main,
} from "@styles/avatar";
import { Button } from "@styles/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDownload,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { backgroundColors, faceColors, headColors } from "@styles/colors";
import { Footer, FooterLink } from "@styles/footer";
import { ChangeThemeButton, GithubButton, Header } from "@styles/header";
import { ThemeContext } from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export interface AvatarProps {
  onSelectTheme: (event: any) => void;
}

const Avatar = ({ onSelectTheme }: AvatarProps) => {
  const context = useContext(AvatarContext);
  const themeContext = useContext(ThemeContext);

  const avatarData = context![0];
  const setAvatarDate = context?.[1];

  const { clothes, eyes, head, mouth, skin } = avatarData!.widgets;

  const generateRandomAvatarHandler = () => {
    const randomBackgroundColor = (
      generateRandomAvatar({
        collection: backgroundColors,
      }) as any
    ).color;
    const randomSkinColor = (
      generateRandomAvatar({ collection: faceColors }) as any
    ).color;
    const randomHeadColor = (
      generateRandomAvatar({ collection: headColors }) as any
    ).color;

    const randomClotheShape = (
      generateRandomAvatar({ collection: ClothesCollection }) as any
    ).name;
    const randomSkinShape = (
      generateRandomAvatar({ collection: SkinCollection }) as any
    ).name;
    const randomEyeShape = (
      generateRandomAvatar({ collection: EyeCollection }) as any
    ).name;
    const randomMouthShape = (
      generateRandomAvatar({ collection: MouthCollection }) as any
    ).name;
    const randomHeadShape = (
      generateRandomAvatar({ collection: HeadCollection }) as any
    ).name;

    setAvatarDate?.((prevAvatarData) => ({
      ...prevAvatarData,
      background: {
        color: randomBackgroundColor,
      },
      widgets: {
        ...prevAvatarData.widgets,
        clothes: {
          shape: randomClotheShape,
        },
        skin: {
          shape: randomSkinShape,
          fillColor: randomSkinColor,
        },
        eyes: {
          shape: randomEyeShape,
        },
        mouth: {
          shape: randomMouthShape,
        },
        head: {
          shape: randomHeadShape,
          fillColor: randomHeadColor,
        },
      },
    }));
  };

  const buttonValues = [
    {
      title: "Random",
      icon: faShuffle,
      onClickEvent: generateRandomAvatarHandler,
    },
    { title: "Code", icon: faCode },
    { title: "Download", icon: faDownload, onClickEvent: downloadImage },
  ];

  return (
    <Main>
      <Header>
        <ChangeThemeButton title="Change theme" onClick={onSelectTheme}>
          {(themeContext as any).changeThemeIcon}
        </ChangeThemeButton>
        <GithubButton
          title="GitHub"
          target="__blank"
          href="https://github.com/morohoschidanieli/create-avatar"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </GithubButton>
      </Header>
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
            <Button
              key={buttonValue.title}
              title={buttonValue.title}
              onClick={buttonValue.onClickEvent}
            >
              <FontAwesomeIcon icon={buttonValue.icon} />
            </Button>
          ))}
        </AvatarActions>
      </AvatarLayout>
      <Footer>
        created with ♥ by
        <FooterLink href="https://www.danieliosifmorohoschi.me">
          Daniel-Iosif Morohoschi
        </FooterLink>
      </Footer>
    </Main>
  );
};

export default Avatar;
