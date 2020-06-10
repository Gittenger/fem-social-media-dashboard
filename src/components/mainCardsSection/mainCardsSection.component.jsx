import React from "react";

import MainCard from "../mainCard/mainCard.component";

import { SectionContainer } from "./mainCardsSection.styles.jsx";

const accounts = [
  {
    id: 0,
    platform: "facebook",
    handle: "@johnp",
    numFollowers: 1245,
    followersYesterday: 1231,
  },
  {
    id: 1,
    platform: "twitter",
    handle: "@johnp",
    numFollowers: 907,
    followersYesterday: 900,
  },
  {
    id: 2,
    platform: "instagram",
    handle: "@therealjohnp",
    numFollowers: 9048,
    followersYesterday: 9120,
  },
  {
    id: 3,
    platform: "youtube",
    handle: "John P.",
    numFollowers: 7439,
    followersYesterday: 7401,
  },
];

const MainCardsSection = () => (
  <SectionContainer>
    {accounts.map(({ id, ...otherProps }) => (
      <MainCard key={id} {...otherProps} />
    ))}
  </SectionContainer>
);

export default MainCardsSection;
