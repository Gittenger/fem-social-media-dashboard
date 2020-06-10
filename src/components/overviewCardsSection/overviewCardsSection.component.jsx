import React from "react";

import OverviewCard from "../overviewCard/overviewCard.component";

import { SectionContainer } from "./overviewCardsSection.styles.jsx";

const cards = [
  {
    id: 0,
    platform: "facebook",
    title: "Page views",
    number: 82,
    numberYesterday: 79,
  },
  {
    id: 1,
    platform: "facebook",
    title: "Likes",
    number: 52,
    numberYesterday: 49,
  },
  {
    id: 2,
    platform: "instagram",
    title: "Likes",
    number: 3489,
    numberYesterday: 3679,
  },
  {
    id: 3,
    platform: "instagram",
    title: "Profile views",
    number: 51000,
    numberYesterday: 50000,
  },
  {
    id: 4,
    platform: "twitter",
    title: "Retweets",
    number: 117,
    numberYesterday: 129,
  },
  {
    id: 5,
    platform: "twitter",
    title: "Likes",
    number: 504,
    numberYesterday: 479,
  },
  {
    id: 6,
    platform: "youtube",
    title: "Likes",
    number: 107,
    numberYesterday: 100,
  },
  {
    id: 7,
    platform: "youtube",
    title: "Total views",
    number: 1402,
    numberYesterday: 1353,
  },
];

const OverviewCardsSection = () => (
  <SectionContainer>
    {cards.map(({ id, ...otherProps }) => (
      <OverviewCard key={id} {...otherProps} />
    ))}
  </SectionContainer>
);

export default OverviewCardsSection;
