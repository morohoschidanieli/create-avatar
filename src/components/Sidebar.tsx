import * as React from "react";
import { useState, useContext, SetStateAction } from "react";
import {
  SidebarAvatarPart,
  SidebarAvatarParts,
  SidebarBodyColor,
  SidebarItemColor,
  SidebarLayout,
  ToggleSidebarButton,
  ToggleSidebarLayout,
} from "../styles/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faArrowDown,
  faChevronRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "./SidebarItem";

import { Circle, Rounded, Square } from "../styles/avatarShape";
import Color from "./Color";
import Face from "./face/Face";
import Apathetic from "./eyes/Apathetic";
import Glasses from "./eyes/Glasses";
import Heart from "./eyes/Heart";
import Mini from "./eyes/Mini";
import Opened from "./eyes/Opened";
import Simple from "./eyes/Simple";
import Sunglasses from "./eyes/Sunglasses";

import ApatheticMouth from "./mouth/ApatheticMouth";
import Bread1 from "./mouth/Bread1";
import Bread3 from "./mouth/Bread3";
import Confused from "./mouth/Confused";
import Happt from "./mouth/Happt";
import LongBread from "./mouth/LongBread";
import Meh from "./mouth/Meh";
import Mostach from "./mouth/Mostach";
import Hoodie from "./clothes/Hoodie";
import Overall from "./clothes/Overall";
import OverShirt from "./clothes/Overshirt";
import OverShirtSecond from "./clothes/OvershirtSecond";
import PufferJacket from "./clothes/PufferJacket";
import SmileTShirt from "./clothes/SmileTShirt";
import TShirt from "./clothes/TShirt";
import { AvatarContext } from "../App";
import { AvatarValues } from "../interfaces/avatar";

const colors = [
  { color: "#FF8F7A" },
  { color: "#8AFDE4" },
  { color: "#FFEA8F" },
  { color: "#95A9FF" },
  { color: "#FF9DCA" },
  { color: "#8AFE7A" },
  { color: "#FF9DE5" },
  { color: "#8DF4FF" },
  { color: "#FFB57A" },
  { color: "#95A2FF" },
  { color: "#F491FF" },
  { color: "#8AFF97" },
  { color: "#FF9FAB" },
  { color: "#8AFFC9" },
  { color: "#E491FF" },
  { color: "#8AFF56" },
  { color: "#FF9FD9" },
];

const headColors = [
  { color: "#F8D9CE" },
  { color: "#F8C9B6" },
  { color: "#DEB3A2" },
  { color: "#C89583" },
  { color: "#9C6358" },
];

const eyeComponents = [
  Apathetic,
  Glasses,
  Heart,
  Mini,
  Opened,
  Simple,
  Sunglasses,
];

const mouthComponents = [
  ApatheticMouth,
  Bread1,
  Bread3,
  Confused,
  Happt,
  LongBread,
  Meh,
  Mostach,
];

const clothesComponents = [
  Hoodie,
  Overall,
  OverShirt,
  OverShirtSecond,
  PufferJacket,
  SmileTShirt,
  TShirt,
];

const Sidebar = () => {
  const context = useContext(AvatarContext);
  const avatarData = context?.[0];
  const setAvatarDate = context?.[1];
  const [show, setShow] = useState(false);

  const [expendBodyColor, setExpendBodyColor] = useState(false);
  const [expendClothesColor, setExpendClothesColor] = useState(false);

  const handleShapeSelect = (shape: string) => {
    setAvatarDate?.((prevAvatarData) => ({
      ...prevAvatarData,
      wrapperShape: shape,
    }));
  };

  const handleBackgroundColor = (color: string) => {
    setAvatarDate?.((prevAvatarData) => ({
      ...prevAvatarData,
      background: { color },
    }));
  };

  const handleBodyColor = (color: string) => {
    setAvatarDate?.((prevAvatarData) => ({
      ...prevAvatarData,
      widgets: {
        ...prevAvatarData.widgets,
        skin: {
          ...prevAvatarData.widgets.skin,
          fillColor: color,
        },
      },
    }));
  };

  const toggleBodyColorExpend = () => {
    setExpendBodyColor(!expendBodyColor);
  };

  const toggleClothesColorExpend = () => {
    setExpendClothesColor(!expendClothesColor);
  };

  const toggleSidebar = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <ToggleSidebarLayout>
        <ToggleSidebarButton onClick={toggleSidebar}>
          <FontAwesomeIcon icon={show ? faArrowRight : faArrowLeft} />
        </ToggleSidebarButton>
      </ToggleSidebarLayout>

      {show && (
        <SidebarLayout>
          <SidebarItem title="Avatar Shape">
            <>
              <Circle
                title="Circle"
                selected={avatarData?.wrapperShape === "circle"}
                onClick={() => handleShapeSelect("circle")}
              />
              <Rounded
                title="Rounded"
                selected={avatarData?.wrapperShape === "rounded"}
                onClick={() => handleShapeSelect("rounded")}
              />
              <Square
                title="Square"
                selected={avatarData?.wrapperShape === "square"}
                onClick={() => handleShapeSelect("square")}
              />
            </>
          </SidebarItem>
          <SidebarItem title="Background Color">
            {colors.map((color) => (
              <div onClick={() => handleBackgroundColor(color.color)}>
                <Color
                  key={color.color}
                  color={color.color}
                  selected={avatarData?.background.color === color.color}
                />
              </div>
            ))}
          </SidebarItem>
          <SidebarItem title="Head">
            <div style={{ cursor: "pointer" }}>
              <SidebarItemColor onClick={() => toggleBodyColorExpend()}>
                <FontAwesomeIcon
                  icon={expendBodyColor ? faAngleDown : faChevronRight}
                  style={{ marginRight: "10px" }}
                />
                colors
              </SidebarItemColor>
              {expendBodyColor && (
                <SidebarBodyColor>
                  {headColors.map((color) => (
                    <div onClick={() => handleBodyColor(color.color)}>
                      <Color
                        key={color.color}
                        color={color.color}
                        selected={
                          avatarData?.widgets.skin.fillColor === color.color
                        }
                      />
                    </div>
                  ))}
                </SidebarBodyColor>
              )}
              <SidebarAvatarParts>
                <SidebarAvatarPart>
                  <Face style={{ width: "100px", height: "100px" }} />
                </SidebarAvatarPart>
              </SidebarAvatarParts>
            </div>
          </SidebarItem>
          <SidebarItem title="Eyes">
            <div style={{ cursor: "pointer" }}>
              <SidebarAvatarParts>
                {eyeComponents.map((EyeComponent) => (
                  <SidebarAvatarPart active={true}>
                    <EyeComponent style={{ width: "100px", height: "100px" }} />
                  </SidebarAvatarPart>
                ))}
              </SidebarAvatarParts>
            </div>
          </SidebarItem>
          <SidebarItem title="Mouth">
            <div style={{ cursor: "pointer" }}>
              <SidebarAvatarParts>
                {mouthComponents.map((MouthComponents) => (
                  <SidebarAvatarPart>
                    <MouthComponents
                      style={{ width: "100px", height: "100px" }}
                    />
                  </SidebarAvatarPart>
                ))}
              </SidebarAvatarParts>
            </div>
          </SidebarItem>
          <SidebarItem title="Clothes">
            <div>
              <h4
                style={{ marginBottom: "0" }}
                onClick={() => toggleClothesColorExpend()}
              >
                <FontAwesomeIcon
                  icon={expendBodyColor ? faArrowDown : faArrowRight}
                  style={{ marginRight: "10px" }}
                />
                colors
              </h4>
              {expendClothesColor && (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {headColors.map((color) => (
                    <div onClick={() => handleBackgroundColor(color.color)}>
                      <Color
                        key={color.color}
                        color={color.color}
                        selected={avatarData?.background.color === color.color}
                      />
                    </div>
                  ))}
                </div>
              )}
              <div style={{ cursor: "pointer" }}>
                <SidebarAvatarParts>
                  {clothesComponents.map((ClotheComponent) => (
                    <SidebarAvatarPart>
                      <ClotheComponent
                        style={{
                          width: "100px",
                          height: "100px",
                        }}
                      />
                    </SidebarAvatarPart>
                  ))}
                </SidebarAvatarParts>
              </div>
            </div>
          </SidebarItem>
        </SidebarLayout>
      )}
    </>
  );
};

export default Sidebar;
