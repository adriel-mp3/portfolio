import styled, { keyframes } from "styled-components";

import brain from "@/assets/brain.svg";
import trophy from "@/assets/trophy.svg";
import { device } from "@/styles/mediaQueries";

const rotate = keyframes`
0% {
  transform: rotate(360deg);
}
100% {
    transform: rotate(0);
	}
`;

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  gap: 120px;
  margin-bottom: 120px;

  @media ${device.xl} {
    gap: 60px;
  }

  @media ${device.lg} {
    grid-template-columns: 1fr;
  }

  @media ${device.sm} {
    padding: 0 20px;
  }
`;

export const Resume = styled.div`
  h1,
  span {
    font-family: "Poppins";
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    color: ${({ theme }) => theme.colors["accent-300"]};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    line-height: 7.5rem;
    color: ${({ theme }) => theme.colors["accent-300"]};
    background: var(
      --Gradient,
      linear-gradient(270deg, #118ba6 0%, #3fd3f3 100%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: -10px;

    @media ${device.xl} {
      margin-left: -5px;
    }

    @media ${device.sm} {
      margin-left: 0px;
    }
  }

  span {
    display: block;
    background: ${({ theme }) => theme.colors["neutral-100"]};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
  }

  @media ${device.xl} {
    h1,
    span {
      font-size: 6rem;
      line-height: 6rem;
    }
  }

  @media ${device.lg} {
    h1,
    span {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
      line-height: 8rem;
    }
  }

  @media ${device.lg} {
    h1,
    span {
      font-size: 6rem;
      line-height: 6rem;
    }
  }

  @media ${device.sm} {
    h1,
    span {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }
  }
`;

export const SideInfo = styled.div`
  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2::after {
    content: "";
    width: 40px;
    height: 40px;
    display: block;
    position: relative;
    top: 4px;
  }

  h2:first-of-type::after {
    background: url(${trophy}) no-repeat;
  }
  h2:last-of-type::after {
    background: url(${brain}) no-repeat;
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};

    strong {
      color: ${({ theme }) => theme.colors["accent-400"]};
    }
  }

  @media ${device.sm} {
    h2:first-of-type::after,
    h2:last-of-type::after {
      background-size: 30px;
    }
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors["neutral-500"]};
  line-height: 2.0625rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  max-width: 50ch;
  margin-bottom: 40px;

  @media ${device.xl} {
    font-size: 1rem;
    line-height: 1.65rem;
    max-width: 55ch;
    margin-bottom: 20px;
  }
  @media ${device.lg} {
    font-size: 1rem;
    line-height: 1.65rem;
    max-width: 55ch;
    margin-bottom: 20px;
  }

  @media ${device.sm} {
    font-size: 1rem;
  }
`;

export const TitleSecondary = styled.h2`
  font-family: "Poppins";
  color: ${({ theme }) => theme.colors["neutral-300"]};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media ${device.xl} {
    font-size: ${({ theme }) => theme.fontSizes["xl"]};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  @media ${device.md} {
    font-size: 2rem;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 650px;

  @media ${device.xl} {
    max-width: 450px;
  }

  @media ${device.sm} {
    max-width: 400px;
  }
`;

export const ImgScroll = styled.img`
  margin: 40px auto 0 auto;
  animation: ${rotate} 6s linear infinite;
  user-select: none;

  @media ${device.xl} {
    display: none;
  }
`;
