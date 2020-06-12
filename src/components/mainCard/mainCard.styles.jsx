import styled from "styled-components";

import { FlexCenter, getDeltaStyle } from "../../style-utils/utils.styles";

export const CardContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  position: relative;
  background: ${({ theme: { colors } }) => colors.cardBg};
  padding: 3rem 0;
  transition: background 0.1s;

  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  & > * {
    transition: color 0.4s;
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme: { colors } }) => colors.cardBgActive};
  }
`;

export const ColorBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: ${({ platform, theme: { colors } }) =>
    platform === "facebook"
      ? colors.facebookBlue
      : platform === "twitter"
      ? colors.twitterBlue
      : platform === "instagram"
      ? colors.instagramGradient
      : platform === "youtube"
      ? colors.youtubeRed
      : "tomato"};
`;

export const CardHeading = styled.div`
  color: ${({ theme: { colors } }) => colors.textSub};
`;

export const CardNumber = styled.div`
  color: ${({ theme: { colors } }) => colors.textMain};
  ${FlexCenter}
  flex-direction: column;

  .card-number {
    font-size: 3em;
    font-weight: 700;
  }

  .followers {
    color: ${({ theme: { colors } }) => colors.textSub};
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 2.5px;
  }
`;

export const CardDelta = styled.div`
  ${FlexCenter}
  padding-top: 0.5rem;
  ${getDeltaStyle}

  img {
    margin-right: 0.5rem;
  }
`;
