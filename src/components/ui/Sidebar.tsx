import * as React from "react";
import { useState, useContext } from "react";
import {
  ClothesCollection,
  EyeCollection,
  HeadCollection,
  MouthCollection,
} from "@collections";
import { Color, SidebarItem } from "@ui";
import { AvatarContext } from "@context";
import { toLowerCaseFirst } from "@utils";
import { Face } from "@parts";
import {
  SidebarAvatarPart,
  SidebarAvatarParts,
  SidebarBodyColor,
  SidebarItemColor,
  SidebarLayout,
  SidebarWrapper,
  ToggleSidebarButton,
  ToggleSidebarIcon,
  ToggleSidebarLayout,
} from "@styles/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faChevronRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Circle, Rounded, Square } from "@styles/avatarShape";
import { backgroundColors, faceColors, headColors } from "@colors";
import { WidgetType } from "../../types/widget";

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
  const [expendHeadColor, setExpendHeadColor] = useState(false);

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

  const handleHeadColor = (color: string) => {
    setAvatarDate?.((prevAvatarData) => ({
      ...prevAvatarData,
      widgets: {
        ...prevAvatarData.widgets,
        head: {
          ...prevAvatarData.widgets.head,
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

  const toggleHeadColorExpend = () => {
    setExpendHeadColor(!expendHeadColor);
  };

  const toggleSidebar = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <SidebarWrapper>
      <ToggleSidebarLayout>
        <ToggleSidebarButton onClick={toggleSidebar}>
          <ToggleSidebarIcon icon={show ? faArrowRight : faArrowLeft} />
        </ToggleSidebarButton>
      </ToggleSidebarLayout>

      {show && (
        <SidebarLayout>
          <SidebarItem title="Avatar Shape">
            <>
              {avatarShapes.map((avatarShape) => (
                <avatarShape.component
                  key={avatarShape.title}
                  title={avatarShape.title}
                  selected={
                    avatarData?.wrapperShape ===
                    toLowerCaseFirst(avatarShape.title)
                  }
                  onClick={() =>
                    handleShapeSelect(toLowerCaseFirst(avatarShape.title))
                  }
                />
              ))}
            </>
          </SidebarItem>

          <SidebarItem title="Background Color">
            {backgroundColors.map((color) => (
              <div
                key={color.color}
                onClick={() => handleBackgroundColor(color.color)}
              >
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
                  {faceColors.map((color) => (
                    <div
                      key={color.color}
                      onClick={() => handleBodyColor(color.color)}
                    >
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
                    key={eyeCollection.name}
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
                    key={mouthCollection.name}
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
              <SidebarItemColor onClick={() => toggleHeadColorExpend()}>
                <FontAwesomeIcon
                  icon={expendHeadColor ? faAngleDown : faChevronRight}
                  style={{ marginRight: "10px" }}
                />
                colors
              </SidebarItemColor>
              {expendHeadColor && (
                <SidebarBodyColor>
                  {headColors.map((color) => (
                    <div
                      key={color.color}
                      onClick={() => handleHeadColor(color.color)}
                    >
                      <Color
                        key={color.color}
                        color={color.color}
                        selected={
                          avatarData?.widgets.head.fillColor === color.color
                        }
                      />
                    </div>
                  ))}
                </SidebarBodyColor>
              )}
              <SidebarAvatarParts active={+false}>
                {HeadCollection.map((headCollection) => (
                  <SidebarAvatarPart
                    key={headCollection.name}
                    active={
                      +(headCollection.name === avatarData?.widgets.head.shape)
                    }
                    onClick={() =>
                      handleWidgetType("head", headCollection.name)
                    }
                  >
                    <headCollection.component
                      style={{ width: "100px", height: "100px" }}
                      fillColor={avatarData!.widgets.head.fillColor}
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
                    key={clotheCollection.name}
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
    </SidebarWrapper>
  );
};

export default Sidebar;
