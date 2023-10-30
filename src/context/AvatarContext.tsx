import { Dispatch, SetStateAction, createContext } from "react";
import { AvatarValues } from "@interfaces/avatar";

const AvatarContext = createContext<
  null | [AvatarValues, Dispatch<SetStateAction<AvatarValues>>]
>(null);

export default AvatarContext;
