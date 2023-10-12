import styled from "styled-components";

export const Container = styled.section`
  max-width: 1600px;
  padding: 0 40px;
  margin: 120px auto 120px auto;

  a:last-child {
  }
`;

export const LabelSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme}) => theme.spacing["4xl"]};

  h2 {
    font-family: "Playfair Display";
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    color: ${({ theme }) => theme.colors["neutral-100"]};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 10rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    color: ${({ theme }) => theme.colors["neutral-300"]};
    padding-top: 50px;
  }
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
`;

export const Project = styled.div`
  img {
    max-width: 800px;
    max-height: 400px;
    border-radius: 9px;
    object-fit: contain;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    overflow: hidden;
    opacity: 0.7;
    transition: 0.3s;
    
    &:hover {
      opacity: 1;
    }
  }

  h3,
  ul,
  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  h3 {
    font-family: "Playfair Display";
    color: ${({ theme }) => theme.colors["neutral-300"]};
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    line-height: ${({ theme }) => theme.fontSizes["2xl"]};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  ul {
    display: flex;
    gap: ${({ theme }) => theme.spacing.sm};
  }

  p {
    color: ${({ theme }) => theme.colors["neutral-500"]};
    line-height: 2.0625rem;
    font-size: ${({ theme }) => theme.fontSizes.base};
    max-width: 50ch;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing["2xl"]};
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;
