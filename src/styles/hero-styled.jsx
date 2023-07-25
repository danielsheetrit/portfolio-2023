import styled from "styled-components";

export const HeroContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const HeroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 230px;
  }

  h1 {
    font-size: 28px;
    margin-top: 2rem;
  }

  p {
    margin-top: 1rem;
    font-size: 18px;
  }

  span {
    font-size: 24px;
    margin-top: 2rem;
    margin-bottom: 3rem;
    color: #6e07f3;
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
