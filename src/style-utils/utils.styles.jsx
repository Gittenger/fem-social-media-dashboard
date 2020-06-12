import { css } from "styled-components";

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const positiveDeltaStyles = css`
  color: ${({ theme: { colors } }) => colors.primaryGreen};
`;

const negativeDeltaStyles = css`
  color: ${({ theme: { colors } }) => colors.primaryRed};
`;

export const getDeltaStyle = ({ positive }) =>
  positive ? positiveDeltaStyles : negativeDeltaStyles;

// MEDIA QUERIES

const sizes = {
  mobileS: "375px",
  mobileM: "500px",
  tabletS: "650px",
  tabletM: "800px",
  tabletL: "870px",
  tabletLand: "940px",
  laptopXS: "1050px",
  laptopS: "1190px",
  laptopM: "1350px",
  laptopL: "1450px",
  desktop: "1600px",
  desktopL: "1900px",
};

const {
  mobileS,
  mobileM,
  tabletS,
  tabletM,
  tabletL,
  tabletLand,
  laptopXS,
  laptopS,
  laptopM,
  laptopL,
  desktop,
  desktopL,
} = sizes;

export const device = {
  mobileS: `only screen and (max-width: ${mobileS})`,
  mobileM: `only screen and (max-width: ${mobileM})`,
  tabletS: `only screen and (max-width: ${tabletS})`,
  tabletM: `only screen and (max-width: ${tabletM})`,
  tabletL: `only screen and (max-width: ${tabletL})`,
  tabletLand: `only screen and (max-width: ${tabletLand})`,
  laptopXS: `only screen and (max-width: ${laptopXS})`,
  laptopS: `only screen and (max-width: ${laptopS})`,
  laptopM: `only screen and (max-width: ${laptopM})`,
  laptopL: `only screen and (max-width: ${laptopL})`,
  desktop: `only screen and (max-width: ${desktop})`,
  desktopL: `only screen and (max-width: ${desktopL})`,
};

export const deviceMin = {
  minMobileS: `only screen and (min-width: ${mobileS})`,
  minMobileM: `only screen and (min-width: ${mobileM})`,
  minTabletS: `only screen and (min-width: ${tabletS})`,
  minTabletM: `only screen and (min-width: ${tabletM})`,
  minTabletL: `only screen and (min-width: ${tabletL})`,
  minTabletLand: `only screen and (min-width: ${tabletLand})`,
  minLaptopXS: `only screen and (min-width: ${laptopXS})`,
  minLaptopS: `only screen and (min-width: ${laptopS})`,
  minLaptopM: `only screen and (min-width: ${laptopM})`,
  minLaptopL: `only screen and (min-width: ${laptopL})`,
  minDesktop: `only screen and (min-width: ${desktop})`,
  minDesktopL: `only screen and (min-width: ${desktopL})`,
};
