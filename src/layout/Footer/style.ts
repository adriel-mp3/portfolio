import styled from "styled-components";

export const Background = styled.footer`
  background: ${({ theme }) => theme.colors["accent-200"]};
`;

export const Container = styled.div`
  max-width: 1600px;
  padding: 48px 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Contact = styled.div`
  p {
    color: ${({ theme }) => theme.colors["neutral-400"]};
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    max-width: 20ch;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  span {
    display: block;
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-top: ${({ theme }) => theme.spacing.lg};
  }

  @media screen and (max-width: 1024px) {
    p {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }

  @media screen and (max-width: 1024px) {
    span {
      margin: ${({ theme }) => theme.spacing.lg} 0;
    }
  }
`;

export const Social = styled.div`
  & > img {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  @media screen and (max-width: 768px) {
    & > img {
      display: none;
    }
  }
`;
