import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  width: 100%;
`;
