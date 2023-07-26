import styled from "styled-components";

export const AboutWrapper = styled.div`
  color: #141c3a;
  padding: 4rem 0rem;
  text-align: center;

  h1 {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 36px;
    }
  }
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  article:last-child {
    margin-top: 2rem;
  }

  @media (min-width: 1280px) {
    flex-direction: row;

    article:first-child {
      margin-right: 2rem;
    }
    article:last-child {
      margin-top: 0rem;
    }
  }
`;

export const Testimonial = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: #e6ecf8;

  padding: 36px 16px;
  border-radius: 12px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 48px 36px;
    height: 375px;
  }

  strong {
    font-size: 18px;
    font-weight: 500;
    color: #6e07f3;
  }

  p {
    margin-top: 1rem;
  }

  span {
    display: block;
    width: 40px;

    svg {
      fill: #141c3a;
    }
  }

  span:last-child {
    width: 100%;
    display: flex;
    justify-content: end;
  }
`;
