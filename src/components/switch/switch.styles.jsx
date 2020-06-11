import styled, { css } from "styled-components";

const normalStyles = css`
  & > div:first-child {
    transform: translateX(0.2rem);
    background-color: ${({ theme: { colors } }) => colors.backgroundGrad2};
  }
`;

const activeStyles = css`
  & > div:first-child {
    transform: translateX(2rem);
  }
`;

export const SwitchContainer = styled.div`
  background: ${({ theme: { colors } }) => colors.toggle};
  border-radius: 1rem;
  width: 3.9rem;
  height: 1.9rem;
  display: flex;
  align-items: center;
  transform: scale(1);
  cursor: pointer;

  ${normalStyles}

  &.active {
    ${activeStyles}
  }
`;

export const SwitchButton = styled.div`
  height: 1.7rem;
  width: 1.7rem;
  border-radius: 50%;
  transition: transform 0.5s;
`;
