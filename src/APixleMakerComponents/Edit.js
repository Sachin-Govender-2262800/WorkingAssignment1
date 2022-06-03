import React, { useState } from "react";
import "../APixlesCss/edit.css";
import { CirclePicker } from "react-color";
import DrawingPanel from "./Panel";




export default function Editor() {

  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("Create Your Art");
    const [panelWidth, setPanelWidth] = useState(30);
  const [panelHeight, setPanelHeight] = useState(30);
  const [selectedColor, setColor] = useState("#009688");

  function CreatePanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "Create Your Art"
      ? setButtonText("Restart")
      : setButtonText("Create Your Art");
  }

  function ColorChanger(color) {
    setColor(color.hex);
  }

  return (
    <div id="editor">
      <h1>Pixel Image Creator</h1>
      {hideDrawingPanel && <h2>How Big Would You Like Your Image to Be?</h2>}
      {hideDrawingPanel && (
        <div id="options">
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(e.target.value);
              }}
            />
            <span>Width</span>
          </div>
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelHeight}
              onChange={(e) => {
                setPanelHeight(e.target.value);
              }}
            />
            <span>Height</span>
          </div>
        </div>
      )}

      <button onClick={CreatePanel} className="button">
        {buttonText}
      </button>

      {hideOptions && (
        <CirclePicker color={selectedColor} onChangeComplete={ColorChanger} />
      )}

      {hideOptions && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  );
}
