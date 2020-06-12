import styled from "styled-components";

import { device } from "../../style-utils/utils.styles";

const { mobileM, tabletLand } = device;

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  width: 100%;

  @media ${tabletLand} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mobileM} {
    grid-template-columns: 1fr;
  }
`;
