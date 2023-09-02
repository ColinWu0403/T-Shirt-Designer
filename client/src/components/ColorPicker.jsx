import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
        presetColors={[
          "#fff",
          "#ccc",
          "#525252",
          "#1b1b1b",
          "#ff2e2e",
          "#51f6f2",
          "#122fdc",
          "#1ecf37",
          "#aa08e8",
          "#f88c05",
          "#f6e511",
          "#f92f97",
          "#2ff96f",
          "#66442d",
          "#ffd100",
          "#00efbc",
          "#850a0a",
          "#550bbc",
        ]}
      />
    </div>
  );
};

export default ColorPicker;
