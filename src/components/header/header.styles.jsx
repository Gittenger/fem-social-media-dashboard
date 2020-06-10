import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const HeaderContainer = styled.div`
  ${FlexCenter}
  justify-content: space-between;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.textSub};
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  color: ${({ theme: { colors } }) => colors.textMain};
`;

export const Subtitle = styled.p`
  text-transform: capitalize;
`;

export const ToggleBox = styled.div`
  ${FlexCenter}
  text-transform: capitalize;
  width: 15rem;

  & > *:first-child {
    margin-right: 2rem;
  }
`;
