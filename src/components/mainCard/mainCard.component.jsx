import React from "react";

import { getPlatform } from "../../assets/imgUtils";

import {
  CardContainer,
  CardHeading,
  CardNumber,
  CardDelta,
} from "./mainCard.styles.jsx";

const MainCard = ({ platform, handle, numFollowers, followersYesterday }) => {
  const deltaFollowers = (numFollowers, followersYesterday) =>
    numFollowers - followersYesterday;

  return (
    <CardContainer>
      <CardHeading>
        <img src={getPlatform(platform)} alt="" /> {handle}
      </CardHeading>
      <CardNumber>
        <p className="card-number">{numFollowers}</p>
        <p className="followers">Followers</p>
      </CardNumber>
      <CardDelta>
        {deltaFollowers(numFollowers, followersYesterday)} since yesterday
      </CardDelta>
    </CardContainer>
  );
};

export default MainCard;
