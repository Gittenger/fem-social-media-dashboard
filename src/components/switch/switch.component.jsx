import React, { useContext } from "react";
import { ThemeContext } from "../../providers/theme.provider";

import { SwitchContainer, SwitchButton } from "./switch.styles.jsx";

const Switch = () => {
  const { light, toggleTheme } = useContext(ThemeContext);

  return (
    <SwitchContainer
      className={light ? "" : "active"}
      onClick={() => toggleTheme()}
    >
      <SwitchButton />
    </SwitchContainer>
  );
};

export default Switch;
