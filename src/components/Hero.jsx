import Wrapper from "../styles/wrapper-styled";
import { HeroContainer, HeroTextBox } from "../styles/hero-styled";
import { Cube, GradientSpan } from "../styles/cube-styled";

export default function Hero() {
  return (
    <Wrapper>
      <HeroContainer>
        <HeroTextBox>
          <Cube>
            <div className="top" />
            <div>
              <GradientSpan index={0} />
              <GradientSpan index={1} />
              <GradientSpan index={2} />
              <GradientSpan index={3} />
            </div>
          </Cube>

          <h1>Full-Stack Developer</h1>

          <p>
            Transform your vision into a digital masterpiece through the power
            of full-stack development
          </p>

          {/* <span>Keep Scrollin' for more info</span> */}
        </HeroTextBox>
      </HeroContainer>
    </Wrapper>
  );
}
