import styled from "styled-components";
import brain from "@/assets/brain.svg";
import trophy from "@/assets/trophy.svg";
import { keyframes } from "styled-components";

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
  }

  span {
    display: block;
    background: ${({ theme }) => theme.colors["neutral-100"]};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
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
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors["neutral-500"]};
  line-height: 2.0625rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  max-width: 50ch;
  margin-bottom: 40px;
`;

export const TitleSecondary = styled.h2`
  font-family: "Poppins";
  color: ${({ theme }) => theme.colors["neutral-300"]};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ImgScroll = styled.img`
  margin: 40px auto 0 auto;
  animation: ${rotate} 6s linear infinite;
  user-select: none;
`;
