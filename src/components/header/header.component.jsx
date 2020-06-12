import React from "react";

import Switch from "../switch/switch.component";

import {
  HeaderContainer,
  HeaderText,
  Title,
  Subtitle,
  ToggleBox,
} from "./header.styles.jsx";

const data = {
  title: "social media dashboard",
  subtitle: "total followers: ",
  numFollowers: 23004,
};

const Header = () => {
  const { title, subtitle, numFollowers } = data;

  return (
    <HeaderContainer>
      <HeaderText>
        <Title>{title}</Title>
        <Subtitle>
          {subtitle}
          <span>{numFollowers.toLocaleString()}</span>
        </Subtitle>
      </HeaderText>
      <hr />
      <ToggleBox>
        <p>dark mode</p>
        <Switch />
      </ToggleBox>
    </HeaderContainer>
  );
};

export default Header;
