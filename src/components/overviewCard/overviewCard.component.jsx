import React from "react";

import { getPlatform } from "../../assets/imgUtils";

import IconDown from "../../assets/icon-down.svg";
import IconUp from "../../assets/icon-up.svg";
import {
  CardContainer,
  CardTitle,
  CardIcon,
  CardNumber,
  CardDelta,
} from "./overviewCard.styles.jsx";

const OverviewCard = ({ platform, title, number, numberYesterday }) => {
  const getDelta = (number, numberYesterday) =>
    Math.floor((number / numberYesterday) * 100 - 100);

  const delta = getDelta(number, numberYesterday);
  const deltaRender = (delta) =>
    Math.sign(delta) === 1 || Math.sign(delta) === 0 ? delta : delta * -1;

  const numberRender = (number) =>
    number >= 10000
      ? number.toString().substr(0, 2) + "k"
      : number.toLocaleString();

  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardIcon>
        <img src={getPlatform(platform)} alt="" />
      </CardIcon>
      <CardNumber>{numberRender(number)}</CardNumber>
      <CardDelta positive={delta >= 0 ? true : false}>
        <div>
          <img src={delta >= 0 ? IconUp : IconDown} alt="" />
          {deltaRender(delta) + "%"}
        </div>
      </CardDelta>
    </CardContainer>
  );
};
export default OverviewCard;
