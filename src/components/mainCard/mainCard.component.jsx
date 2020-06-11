import React from "react";

import { getPlatform } from "../../assets/imgUtils";

import IconDown from "../../assets/icon-down.svg";
import IconUp from "../../assets/icon-up.svg";
import {
  CardContainer,
  CardHeading,
  CardNumber,
  CardDelta,
} from "./mainCard.styles.jsx";

const MainCard = ({ platform, handle, numFollowers, followersYesterday }) => {
  const getDelta = (numFollowers, followersYesterday) =>
    numFollowers - followersYesterday;
  const delta = getDelta(numFollowers, followersYesterday);
  const deltaRender = (delta) =>
    Math.sign(delta) === 1 || Math.sign(delta) === 0 ? delta : delta * -1;

  return (
    <CardContainer>
      <CardHeading>
        <img src={getPlatform(platform)} alt="" /> {handle}
      </CardHeading>
      <CardNumber>
        <p className="card-number">{numFollowers}</p>
        <p className="followers">Followers</p>
      </CardNumber>
      <CardDelta positive={delta >= 0 ? true : false}>
        <img src={delta >= 0 ? IconUp : IconDown} alt="" /> {deltaRender(delta)}{" "}
        today
      </CardDelta>
    </CardContainer>
  );
};

export default MainCard;
