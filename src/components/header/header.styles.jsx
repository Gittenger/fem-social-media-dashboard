import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobileM } = device;

export const HeaderContainer = styled.div`
  ${FlexCenter}
  justify-content: space-between;
  margin-bottom: 3.5rem;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.textSub};
  transition: color 0.4s;

  hr {
    display: none;
  }

  @media ${mobileM} {
    flex-direction: column;
    align-items: flex-start;

    hr {
      display: block;
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  @media ${mobileM} {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h1`
  text-transform: capitalize;
  color: ${({ theme: { colors } }) => colors.textMain};
  transition: color 0.2s;

  @media ${mobileM} {
    font-size: 1.6em;
  }
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

  @media ${mobileM} {
    width: 100%;
    justify-content: space-between;
  }
`;
