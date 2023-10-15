import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  li a > img {
    transition: 0.3s;
    cursor: pointer;
  }
  li a > img:hover {
    transform: translateY(-4px);
    filter: brightness(120%);
  }
`;
