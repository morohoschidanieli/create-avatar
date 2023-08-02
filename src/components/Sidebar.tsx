import * as React from "react";
import { useState } from "react";
import {
  SidebarLayout,
  ToggleSidebarButton,
  ToggleSidebarLayout,
} from "../styles/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "./SidebarItem";

import { Circle, Rounded, Square } from "../styles/avatarShape";
import Color from "./Color";

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

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(colors[0].color);
  const [expendBodyColor, setExpendBodyColor] = useState(false);
  const [expendClothesColor, setExpendClothesColor] = useState(false);
  const [selectedShape, setSelectedShape] = useState("Circle");

  const handleShapeSelect = (shape: string) => {
    setSelectedShape(shape);
  };

  const handleBackgroundColor = (color: string) => {
    setBackgroundColor(color);
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
                selected={selectedShape === "Circle"}
                onClick={() => handleShapeSelect("Circle")}
              />
              <Rounded
                title="Rounded"
                selected={selectedShape === "Rounded"}
                onClick={() => handleShapeSelect("Rounded")}
              />
              <Square
                title="Square"
                selected={selectedShape === "Square"}
                onClick={() => handleShapeSelect("Square")}
              />
            </>
          </SidebarItem>
          <SidebarItem title="Background Color">
            {colors.map((color) => (
              <div onClick={() => handleBackgroundColor(color.color)}>
                <Color
                  key={color.color}
                  color={color.color}
                  selected={backgroundColor === color.color}
                />
              </div>
            ))}
          </SidebarItem>
          <SidebarItem title="Head">
            <div>
              <h4
                style={{ marginBottom: "0" }}
                onClick={() => toggleBodyColorExpend()}
              >
                <FontAwesomeIcon
                  icon={expendBodyColor ? faArrowDown : faArrowRight}
                  style={{ marginRight: "10px" }}
                />
                colors
              </h4>
              {expendBodyColor && (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {headColors.map((color) => (
                    <div onClick={() => handleBackgroundColor(color.color)}>
                      <Color
                        key={color.color}
                        color={color.color}
                        selected={backgroundColor === color.color}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </SidebarItem>
          <SidebarItem title="Eyes">wer</SidebarItem>
          <SidebarItem title="Mouth">wer</SidebarItem>
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
                        selected={backgroundColor === color.color}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </SidebarItem>
        </SidebarLayout>
      )}
    </>
  );
};

export default Sidebar;
