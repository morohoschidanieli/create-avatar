import {
  ClothesCollection,
  EyeCollection,
  HeadCollection,
  MouthCollection,
  SkinCollection,
} from "@collections";
import { faceColors, headColors, backgroundColors } from "@styles/colors";

type CollectionItem =
  | (typeof ClothesCollection)[0]
  | (typeof EyeCollection)[0]
  | (typeof HeadCollection)[0]
  | (typeof MouthCollection)[0]
  | (typeof SkinCollection)[0]
  | (typeof backgroundColors)[0]
  | (typeof faceColors)[0]
  | (typeof headColors)[0];

interface generateRandomAvatarProps {
  collection: CollectionItem[];
}

const generateRandomAvatar = <T extends CollectionItem>({
  collection,
}: generateRandomAvatarProps): T => {
  const randomCollectionIndex = Math.floor(Math.random() * collection.length);
  const randomCollectionItem = collection[randomCollectionIndex];
  return randomCollectionItem as T;
};

export default generateRandomAvatar;
