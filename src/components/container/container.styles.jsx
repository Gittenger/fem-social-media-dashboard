import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: ${({
    theme: {
      layout: { desktop },
    },
  }) => desktop.contentWidth};
`;
