import React from "react";

import { getPlatform } from "../../assets/imgUtils";

import {
  CardContainer,
  CardTitle,
  CardIcon,
  CardNumber,
  CardDelta,
} from "./overviewCard.styles.jsx";

const OverviewCard = ({ platform, title, number, numberYesterday }) => {
  const delta = (number, numberYesterday) => number - numberYesterday;

  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardIcon>
        <img src={getPlatform(platform)} alt="" />
      </CardIcon>
      <CardNumber>{number}</CardNumber>
      <CardDelta>{delta(number, numberYesterday)}</CardDelta>
    </CardContainer>
  );
};
export default OverviewCard;
