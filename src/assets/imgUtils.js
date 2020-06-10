import { Facebook, Instagram, Twitter, Youtube } from "./imgIndex.js";

export const getPlatform = (platform) =>
  platform === "facebook"
    ? Facebook
    : platform === "twitter"
    ? Twitter
    : platform === "instagram"
    ? Instagram
    : platform === "youtube"
    ? Youtube
    : Facebook;
