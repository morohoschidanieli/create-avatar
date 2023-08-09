import { Dispatch, SetStateAction, createContext } from "react";
import { AvatarValues } from "../interfaces/avatar";

export const AvatarContext = createContext<
  null | [AvatarValues, Dispatch<SetStateAction<AvatarValues>>]
>(null);
