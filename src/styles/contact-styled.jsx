import styled from "styled-components";

export const ContactBackground = styled.div`
  margin-top: 2rem;
  background-color: #333;
`;

export const ContactMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 48px 0px;

  h1 {
    font-size: 24px;
  }

  span {
    margin-top: 3rem;
    color: #5be9b9;
  }

  strong {
    margin-top: 1rem;
  }

  > div {
    display: flex;
    margin-top: 2rem;

    > a {
      cursor: pointer;
      border: 1px solid #fff;
      border-radius: 12px;
      padding: 16px;
      width: 70px;
      height: 70px;
      margin: .5rem;
    }
  }
`;
