/* React */
import * as React from "react";
import { useState, useContext } from "react";

/* Font Awesome */
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

/* Icons */
import {
  faArrowRight,
  faArrowLeft,
  faArrowDown,
  faChevronRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

/* Components */
import SidebarItem from "./SidebarItem";
import Color from "./Color";

/* Styles */
import { Circle, Rounded, Square } from "../styles/avatarShape";

/* Contenxt */
import { AvatarContext } from "../context/AvatarContext";

import Face from "./face/Face";

/* Collections */
import ClothesCollection from "./clothes/ClothesCollection";
import EyeCollection from "./eyes/EyeCollection";
import MouthCollection from "./mouth/MouthCollection";

/* Colors */
import { backgroundColor } from "../styles/colors/backgroundColors";
import { headColors } from "../styles/colors/headColors";
import HeadCollection from "./head/HeadCollection";

/* Types */
import { WidgetType } from "./types/widget";
import toLowerCase from "../utils/toLowerCaseFirst";

/* Avatar Shapes */
const avatarShapes = [
  { title: "Circle", component: Circle },
  { title: "Rounded", component: Rounded },
  { title: "Square", component: Square },
];

const Sidebar = () => {
  const context = useContext(AvatarContext);

  const avatarData = context?.[0];
  const setAvatarDate = context?.[1];

  const [show, setShow] = useState(false);
  const [expendBodyColor, setExpendBodyColor] = useState(false);

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

  const handleWidgetType = (widget: WidgetType, type: string) => {
    setAvatarDate?.((prevAvatarData) => ({
      ...prevAvatarData,
      widgets: {
        ...prevAvatarData.widgets,
        [widget]: {
          ...prevAvatarData.widgets[widget],
          shape: type,
        },
      },
    }));
  };

  const toggleBodyColorExpend = () => {
    setExpendBodyColor(!expendBodyColor);
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
              {avatarShapes.map((avatarShape) => (
                <avatarShape.component
                  title={avatarShape.title}
                  selected={
                    avatarData?.wrapperShape === toLowerCase(avatarShape.title)
                  }
                  onClick={() =>
                    handleShapeSelect(toLowerCase(avatarShape.title))
                  }
                />
              ))}
            </>
          </SidebarItem>

          <SidebarItem title="Background Color">
            {backgroundColor.map((color) => (
              <div onClick={() => handleBackgroundColor(color.color)}>
                <Color
                  key={color.color}
                  color={color.color}
                  selected={avatarData?.background.color === color.color}
                />
              </div>
            ))}
          </SidebarItem>
          <SidebarItem title="Face">
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
                <SidebarAvatarPart active={+true}>
                  <Face
                    fillColor={avatarData!.widgets.skin.fillColor}
                    style={{ width: "100px", height: "100px" }}
                  />
                </SidebarAvatarPart>
              </SidebarAvatarParts>
            </div>
          </SidebarItem>
          <SidebarItem title="Eyes">
            <div style={{ cursor: "pointer" }}>
              <SidebarAvatarParts>
                {EyeCollection.map((eyeCollection) => (
                  <SidebarAvatarPart
                    onClick={() => handleWidgetType("eyes", eyeCollection.name)}
                    active={
                      +(eyeCollection.name === avatarData?.widgets.eyes.shape)
                    }
                  >
                    <eyeCollection.component
                      style={{ width: "100px", height: "100px" }}
                    />
                  </SidebarAvatarPart>
                ))}
              </SidebarAvatarParts>
            </div>
          </SidebarItem>
          <SidebarItem title="Mouth">
            <div style={{ cursor: "pointer" }}>
              <SidebarAvatarParts>
                {MouthCollection.map((mouthCollection) => (
                  <SidebarAvatarPart
                    active={
                      +(
                        mouthCollection.name === avatarData?.widgets.mouth.shape
                      )
                    }
                    onClick={() =>
                      handleWidgetType("mouth", mouthCollection.name)
                    }
                  >
                    <mouthCollection.component
                      style={{ width: "100px", height: "100px" }}
                    />
                  </SidebarAvatarPart>
                ))}
              </SidebarAvatarParts>
            </div>
          </SidebarItem>
          <SidebarItem title="Head">
            <div style={{ cursor: "pointer" }}>
              <SidebarAvatarParts active={false}>
                {HeadCollection.map((headCollection) => (
                  <SidebarAvatarPart
                    active={
                      +(headCollection.name === avatarData?.widgets.head.shape)
                    }
                    onClick={() =>
                      handleWidgetType("head", headCollection.name)
                    }
                  >
                    <headCollection.component
                      style={{ width: "100px", height: "100px" }}
                    />
                  </SidebarAvatarPart>
                ))}
              </SidebarAvatarParts>
            </div>
          </SidebarItem>
          <SidebarItem title="Clothes">
            <div style={{ cursor: "pointer" }}>
              <SidebarAvatarParts>
                {ClothesCollection.map((clotheCollection) => (
                  <SidebarAvatarPart
                    active={
                      +(
                        clotheCollection.name ===
                        avatarData?.widgets.clothes.shape
                      )
                    }
                    onClick={() =>
                      handleWidgetType("clothes", clotheCollection.name)
                    }
                  >
                    <clotheCollection.component
                      style={{
                        width: "100px",
                        height: "100px",
                      }}
                    />
                  </SidebarAvatarPart>
                ))}
              </SidebarAvatarParts>
            </div>
          </SidebarItem>
        </SidebarLayout>
      )}
    </>
  );
};

export default Sidebar;
