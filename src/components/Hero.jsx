// import { TypeAnimation } from "react-type-animation";

import Avatar from "../assets/daniel-avatar.svg";
import Wrapper from "../styles/wrapper-styled";
import { HeroContainer, HeroTextBox } from "../styles/hero-styled";

export default function Hero() {
  return (
    <Wrapper>
      <HeroContainer>
        <HeroTextBox>
          <img src={Avatar} alt="avatar" />

          <h1>I'm a Full-Stack Developer</h1>

          <p>
            I will transform your vision into a digital masterpiece through the
            power of full-stack development
          </p>

          {/* <span>My area of expertise is:</span> */}
          {/* <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Pixel Perfect Layouts",
              1500, // wait 1s before replacing "Mice" with "Hamsters"
              "Charts & Data Visualization",
              1500,
              "Mobile Applications",
              1500,
              "API Integrations",
              1500,
              "The Dark Side of JavaScript",
              1500,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1.5rem",
              display: "inline-block",
              color: "#6e07f3",
            }}
            repeat={Infinity}
          /> */}
        </HeroTextBox>
      </HeroContainer>
    </Wrapper>
  );
}
