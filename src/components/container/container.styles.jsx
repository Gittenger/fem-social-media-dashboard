import styled from "styled-components";

import { device } from "../../style-utils/utils.styles";

const { mobileS } = device;

export const ContainerDiv = styled.div`
  width: ${({
    theme: {
      layout: { desktop },
    },
  }) => desktop.contentWidth};

  @media ${mobileS} {
    width: 90%;
  }
`;
