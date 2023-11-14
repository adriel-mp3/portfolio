import styled, { keyframes } from "styled-components";

import { device } from "@/styles/mediaQueries";

const pulse = keyframes`
  20% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 rgba(247, 53, 50, 0.6));
  }

  30% {
    transform: scale(1.1);
    filter: drop-shadow(0 0 2px rgba(247, 53, 50, 1));
  }

  35% {
    transform: scale(0.9);
    filter: drop-shadow(0 0 0 rgba(247, 53, 50, 0.4));
  }

  40% {
    transform: scale(1.15);
    filter: drop-shadow(0 0 1px rgba(247, 53, 50, 1));
  }

  55% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 rgba(247, 53, 50, 0.3));
}`;

export const Background = styled.footer`
  background: ${({ theme }) => theme.colors["accent-100"]};
`;

export const Container = styled.div`
  max-width: 1600px;
  padding: 48px 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media ${device.md} {
    display: block;
  }

  @media ${device.sm} {
    padding: 48px 20px;
  }
`;

export const Contact = styled.div`
  p {
    color: ${({ theme }) => theme.colors["neutral-100"]};
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    max-width: 20ch;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  @media ${device.lg} {
    p {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }

  @media ${device.md} {
    p {
      font-size: 2rem;
    }
  }
`;

export const Social = styled.div`
  & > img {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  @media ${device.md} {
    & > img {
      display: none;
    }
  }
`;

export const Copyright = styled.span`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
  color: ${({ theme }) => theme.colors["neutral-400"]};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  margin-top: ${({ theme }) => theme.spacing.lg};

  @media ${device.lg} {
    margin-bottom: 60px;
  }

  @media ${device.md} {
    margin-bottom: 20px;
  }
`;

export const Heart = styled.span`
  animation: ${pulse} 2s infinite;
  width: fit-content;
`;
