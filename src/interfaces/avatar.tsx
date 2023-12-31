import { EyeType } from "../types/eye";
import { MouthType } from "../types/mouth";

export interface AvatarPropsInterface {
  head: string;
  eyes: string;
  mouth: string;
  clothes: string;
  skin: string;
}

export interface AvatarPartProps {
  type: string;
  fillColor?: string;
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
    };
  };
}

export interface AvatarProps {
  style?: React.CSSProperties;
  fillColor?: string;
}

export interface SkinProps extends AvatarProps {
  fillColor: string;
}

export interface SkinProps2 extends AvatarPartProps {
  fillColor?: string;
}
