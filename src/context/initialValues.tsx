import {
  BACKGROUND_DEFAULT_COLOR,
  HEAD_DEFAULT_COLOR,
  SKIN_DEFAULT_COLOR,
} from "@constants";
import { AvatarValues } from "@interfaces/avatar";
import { EyeType } from "types/eye";
import { MouthType } from "types/mouth";

const avatarDataInitialValue: AvatarValues = {
  wrapperShape: "circle",
  background: { color: BACKGROUND_DEFAULT_COLOR },
  widgets: {
    skin: {
      shape: "base",
      fillColor: SKIN_DEFAULT_COLOR,
    },
    head: {
      shape: "beanie",
      fillColor: HEAD_DEFAULT_COLOR,
    },
    eyes: {
      shape: "apathetic" as EyeType,
    },
    mouth: {
      shape: "apatheticMouth" as MouthType,
    },
    clothes: {
      shape: "hoodie",
    },
  },
};

export default avatarDataInitialValue;
