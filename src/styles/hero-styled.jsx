import styled from "styled-components";

export const HeroContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 6rem;

  @keyframes fade-up {
    0% {
      opacity: 0;
      transform: translateY(100px) scale(0.9);
    }

    100% {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
  }

  animation-name: fade-up;
  animation-duration: 0.8s;

  @media (min-width: 768px) {
    padding-top: 4rem;
  }
`;

export const HeroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 28px;
    margin-top: 7rem;
  }

  p {
    margin-top: 1rem;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 48px;
    }

    p {
      font-size: 24px;
      margin-top: 1.5rem;
      max-width: 60%;
    }
  }
`;
