import { EyeType } from "./eye";
import { MouthType } from "./mouth";

export interface AvatarPropsInterface {
  head: string;
  eyes: string;
  mouth: string;
  clothes: string;
  skin: string;
}

export interface AvatarPartProps {
  type: string;
}

export interface AvatarValues {
  wrapperShape: string;
  background: { color: string };
  widgets: {
    skin: {
      shape: string;
      fillColor: string;
    };
    head: {
      shape: string;
      fillColor: string;
    };
    eyes: {
      shape: EyeType;
    };
    mouth: {
      shape: MouthType;
    };
    clothes: {
      shape: string;
      color: string;
    };
  };
}

export interface AvatarProps {
  style?: React.CSSProperties;
}

export interface SkinProps extends AvatarProps {
  fillColor: string;
}

export interface SkinProps2 extends AvatarPartProps {
  fillColor?: string;
}
