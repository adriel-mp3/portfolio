import styled from "styled-components";

import { device } from "@/styles/mediaQueries";

export const Container = styled.section`
  max-width: 1440px;
  padding: 0 40px;
  margin: 120px auto 120px auto;

  @media ${device.sm} {
    padding: 0 20px;
  }
`;

export const LabelSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};

  h2 {
    font-family: "Poppins";
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    color: ${({ theme }) => theme.colors["neutral-100"]};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 7.5rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors["neutral-500"]};
    padding-top: 20px;
    line-height: 2rem;
    margin-left: 5px;
  }

  @media ${device.xl} {
    flex-wrap: wrap;

    h2 {
      font-size: 6rem;
      line-height: 6rem;
    }
  }

  @media ${device.lg} {
    margin-bottom: 60px;
  }

  @media ${device.sm} {
    h2 {
      font-size: 4rem;
      line-height: 4rem;
    }
  }
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 120px;

  @media ${device.xl} {
    grid-template-columns: 1fr;
  }
`;

export const Project = styled.div`
  background: rgba(0, 84, 102, 0.05);
  backdrop-filter: blur(20px);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px -2px 4px 0px rgba(255, 255, 255, 0.02) inset;

  h3,
  ul,
  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  h3 {
    font-family: "Poppins";
    color: ${({ theme }) => theme.colors["neutral-300"]};
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    line-height: ${({ theme }) => theme.fontSizes["2xl"]};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.sm};
  }

  p {
    color: ${({ theme }) => theme.colors["neutral-500"]};
    line-height: 2.0625rem;
    font-size: ${({ theme }) => theme.fontSizes.base};
  }

  @media ${device.lg} {
    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      line-height: 1.75rem;
    }
  }

  @media ${device.md} {
    padding: 20px;
    h3 {
      font-size: 2rem;
      line-height: 2rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing["2xl"]};
  align-items: center;
  margin-bottom: 40px;

  @media ${device.sm} {
    gap: 20px;
    a {
      font-size: 1rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;
