import Avatar from "../assets/daniel-avatar.svg";
import Wrapper from "../styles/wrapper-styled";
import { NavbarContainer, Logo, NavItems } from "../styles/navbar-styled.jsx";

export default function Navbar() {
  return (
    <Wrapper>
      <NavbarContainer>
        <nav>
          <Logo>
            <img src={Avatar} alt="avatar" />
          </Logo>
          <h2>Daniel Sheetrit</h2>

          <NavItems>
            <a href="#projects-section">Recent Work</a>
          </NavItems>
        </nav>
      </NavbarContainer>
    </Wrapper>
  );
}
