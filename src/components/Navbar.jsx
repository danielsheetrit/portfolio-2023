import Wrapper from "../styles/wrapper-styled";
import { NavbarContainer, Logo, NavItems } from "../styles/navbar-styled.jsx";
import CodeIcon from "../icons/CodeIcon.jsx";

export default function Navbar() {
  return (
    <Wrapper>
      <NavbarContainer>
        <nav>
          <Logo>
            <CodeIcon width={1} height={1} />
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
