import styled from "styled-components";

export const ProjectsMain = styled.div`
  padding-top: 4rem;
  text-align: center;

  h1 {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    > h1 {
      font-size: 36px;
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-auto-rows: minmax(500px, auto);
  gap: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  .grid-item {
    text-align: left;
    border: 1px solid #e6ecf8;
    border-radius: 12px;
    box-shadow: 1px 1px 15px -10px #333;

    video, img {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      height: 240px;
      width: 100%;
      object-fit: cover;
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

      a {
        text-align: center;
        width: auto;
        cursor: pointer;
        margin-top: 2rem;
        display: block;
        padding: 10px 16px;
        background-color: #e6ecf8;
        border-radius: 99px;
        transition: 250ms;
        text-decoration: none;

        &:hover {
          color: #fff;
          background-color: #6e07f3;
        }
      }
    }
  }

  @media (min-width: 550px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`;
