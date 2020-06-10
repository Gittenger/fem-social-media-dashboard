import React from "react";

import Facebook from "../../assets/icon-facebook.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Instagram from "../../assets/icon-instagram.svg";
import Youtube from "../../assets/icon-youtube.svg";

import {} from "./mainCard.styles.jsx";

const MainCard = ({ platform, handle, numFollowers, followersYesterday }) => {
  const getPlatform = (platform) =>
    platform === "facebook"
      ? Facebook
      : platform === "twitter"
      ? Twitter
      : platform === "instagram"
      ? Instagram
      : platform === "youtube"
      ? Youtube
      : Facebook;

  const deltaFollowers = (numFollowers, followersYesterday) =>
    numFollowers - followersYesterday;

  return (
    <div>
      <div>
        <img src={getPlatform(platform)} alt="" /> {handle}
      </div>
      <div>
        {numFollowers}
        <p>Followers</p>
      </div>
      <div>
        {deltaFollowers(numFollowers, followersYesterday)} since yesterday
      </div>
    </div>
  );
};

export default MainCard;
