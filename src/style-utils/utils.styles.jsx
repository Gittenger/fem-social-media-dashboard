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
