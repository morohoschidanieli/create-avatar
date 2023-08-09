import { AvatarValues } from "../interfaces/avatar";
import { EyeType } from "../interfaces/eye";
import { MouthType } from "../interfaces/mouth";

export const avatarDataInitialValue: AvatarValues = {
  wrapperShape: "circle",
  background: { color: "#FF8F7A" },
  widgets: {
    skin: {
      shape: "base",
      fillColor: "#F8C9B6",
    },
    head: {
      shape: "beanie",
      fillColor: "#ff0000",
    },
    eyes: {
      shape: "apathetic" as EyeType,
    },
    mouth: {
      shape: "apatheticMouth" as MouthType,
    },
    clothes: {
      shape: "hoodie",
      color: "#00ff00",
    },
  },
};
