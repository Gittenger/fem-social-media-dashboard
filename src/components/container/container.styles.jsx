import styled from "styled-components";

import { device, deviceMin } from "../../style-utils/utils.styles";

const { mobileM, laptopM } = device;
const { minLaptopM } = deviceMin;

export const ContainerDiv = styled.div`
  @media ${laptopM} {
    width: 90%;
  }

  @media ${mobileM} {
    width: 90%;
  }

  @media ${minLaptopM} {
    width: ${({
      theme: {
        layout: { desktop },
      },
    }) => desktop.contentWidth};
  }
`;
