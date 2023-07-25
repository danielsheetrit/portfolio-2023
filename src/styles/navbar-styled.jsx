import styled from "styled-components";

export const NavbarContainer = styled.div`
  @keyframes fade-down {
    0% {
      opacity: 0;
      transform: translateY(-30px) scale(0.9);
    }

    100% {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
  }

  animation-name: fade-down;
  animation-duration: 0.8s;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0rem;

    h2 {
      font-size: 18px;
    }

    @media (min-width: 768px) {
      padding: 2rem 0rem;

      h2 {
        font-size: 26px;
      }
    }
  }
`;

export const NavItems = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;

  a {
    font-size: 18px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 99px;
    transition: 0.2s;
    text-decoration: none;
    background-color: #e6ecf8;

    &:hover {
      color: #fff;
      background-color: #6e07f3;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  width: 60px;
  margin-right: 0.5rem;
`;
