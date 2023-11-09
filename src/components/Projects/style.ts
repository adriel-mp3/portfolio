import styled from "styled-components";

export const Container = styled.section`
  max-width: 1440px;
  padding: 0 40px;
  margin: 120px auto 120px auto;
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
  }

  @media screen and (max-width: 1280px) {
    flex-wrap: wrap;

    h2 {
      font-size: 6rem;
      line-height: 6rem;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 640px) {
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
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};

  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;

export const Project = styled.div`
  background: rgba(0, 84, 102, 0.05);
  backdrop-filter: blur(20px);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px -2px 4px 0px rgba(255, 255, 255, 0.05) inset;

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

  @media screen and (max-width: 1024px) {
    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      line-height: 1.9rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing["2xl"]};
  align-items: center;
  margin-bottom: 40px;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;
