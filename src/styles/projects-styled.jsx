import styled from "styled-components";

export const ProjectsMain = styled.div`
  padding-top: 6rem;
  padding-bottom: 6rem;
  text-align: center;

  h1 {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    > h1 {
      font-size: 48px;
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  gap: 1rem;
  padding-top: 3rem;

  .grid-item {
    cursor: pointer;
    text-align: left;
    border: 1px solid #e6ecf8;
    border-radius: 12px;
    height: 500px;

    video {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      height: 240px;
      width: 100%;
    }

    div {
      height: 50%;
      padding: 16px;

      h4 {
        font-size: 24px;
        color: #6e07f3;
      }

      p {
        font-weight: 300;
      }

      span {
        display: block;
        margin-top: 1rem;
      }
    }
  }

  @media (min-width: 550px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`;
