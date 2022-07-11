import React from "react";

//Import Icons
import Icon from "@ailibs/feather-react-ts";

//constants
import { layoutTheme } from "../../../constants/layout";

interface LightDarkState {
  layoutMode: string;
  onChangeLayoutMode: any;
}

const LightDark = ({ layoutMode, onChangeLayoutMode }: LightDarkState) => {
  const mode =
    layoutMode === layoutTheme["DARKMODE"]
      ? layoutTheme["LIGHTMODE"]
      : layoutTheme["DARKMODE"];
  return (
    <div className="dropdown d-none d-sm-inline-block">
      <button
        onClick={() => onChangeLayoutMode(mode)}
        type="button"
        className="btn header-item"
      >
        {layoutMode === layoutTheme["DARKMODE"] ? (
          <Icon name="sun" className="icon-lg layout-mode-light" />
        ) : (
          <Icon name="moon" className="icon-lg layout-mode-dark" />
        )}
      </button>
    </div>
  );
};

export default LightDark;
