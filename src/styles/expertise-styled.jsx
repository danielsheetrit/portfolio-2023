import styled from "styled-components";

export const ExpertiseMain = styled.div`
  padding-top: 4rem;
  text-align: center;

  > h1 {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    padding-top: 6rem;
    > h1 {
      font-size: 48px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 3rem;

    article:first-child {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      border-bottom: 1px solid transparent;
    }

    article:last-child {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }

    @media (min-width: 768px) {
      flex-direction: row;

      article {
        border-radius: 12px;
        border: 1px solid #e6ecf8 !important;
      }

      article:first-child {
        margin-right: 2rem;
      }
    }
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  border: 1px solid #e6ecf8;
  text-align: center;
  padding: 50px 30px;

  @media (min-width: 768px) {
    padding: 50px;
  }

  h2 {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .card-icon {
    width: 68px;
    height: 68px;
    padding: 12px;
    border-radius: 99px;
    background-color: #5be9b9;
    color: #333;
  }

  h5 {
    font-weight: 400;
    font-size: 18px;
    color: #6e07f3;

    span {
      display: inline-block;
      margin-top: 6px;
      color: #333;
    }
  }

  .card-divider {
    width: 7.5px;
    height: 7.5px;
    border-radius: 99px;
    margin: 2rem 0;

    background-color: #e6ecf8;
  }
`;
