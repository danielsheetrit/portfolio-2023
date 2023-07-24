import styled from "styled-components";

export const NavbarContainer = styled.div`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0rem;

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
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 99px;
    transition: 0.2s;
    text-decoration: none;

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
  background-color: #6e07f3;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 99px;

  svg {
    width: 40px;
  }
`;
