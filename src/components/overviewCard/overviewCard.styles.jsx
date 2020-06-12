import styled from "styled-components";

import { FlexCenter, getDeltaStyle } from "../../style-utils/utils.styles";

export const CardContainer = styled.div`
  background: ${({ theme: { colors } }) => colors.cardBg};
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  transition: background 0.1s;

  & > * {
    transition: color 0.4s;
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme: { colors } }) => colors.cardBgActive};
  }
`;

export const CardTitle = styled.h3`
  color: ${({ theme: { colors } }) => colors.textSub};
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    width: 3rem;
    height: 3rem;
  }
`;

export const CardNumber = styled.p`
  font-size: 2.7em;
  color: ${({ theme: { colors } }) => colors.textMain};
`;

export const CardDelta = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  ${getDeltaStyle}
  div {
    ${FlexCenter}

    img {
      margin-right: 0.5rem;
    }
  }
`;
