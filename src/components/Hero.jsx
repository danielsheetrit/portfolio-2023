import Avatar from "../assets/daniel-avatar.svg";
import Wrapper from "../styles/wrapper-styled";
import { HeroContainer, HeroTextBox } from "../styles/hero-styled";

export default function Hero() {
  return (
    <Wrapper>
      <HeroContainer>
        <HeroTextBox>
          <img src={Avatar} alt="avatar" />

          <h1>Full-Stack Developer</h1>

          <p>
            Transform your vision into a digital masterpiece through the
            power of full-stack development
          </p>

          <span>Keep Scrollin' for more info</span>
        </HeroTextBox>
      </HeroContainer>
    </Wrapper>
  );
}
