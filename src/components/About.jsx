import Wrapper from "../styles/wrapper-styled";
import {
  AboutWrapper,
  Testimonial,
  TestimonialsContainer,
} from "../styles/about-styled";

import QuoteLeft from "../icons/QuoteLeft";
import QuoteRight from "../icons/QuoteRight";

// import LeftQuotes from "../assets/quotes-l.svg";
// import RightQuotes from "../assets/quotes-r.svg";

export default function About() {
  return (
    <AboutWrapper>
      <Wrapper>
        <h1>Testimonials</h1>
        <p>People I've worked with have said some nice things...</p>

        <TestimonialsContainer>
          <Testimonial>
            <strong>@Michael Brodsky - Ex Product Manager (Elbit)</strong>
            <p>
              <span className="quotes">
                <QuoteLeft />
              </span>
              A Stellar Full Stack Developer - Exceeding Expectations! I had the
              privilege of collaborating with an exceptional full stack
              developer on a recent project "Mental Aid System". Daniels
              understanding of the requirements was swift and thorough, leading
              to a flawless web application. His methodical approach, clear
              communication, and proactive problem-solving kept everything on
              track, even when challenges arose...
              <span className="quotes">
                <QuoteRight />
              </span>
            </p>
          </Testimonial>

          <Testimonial>
            <strong>@Josh - Founder & Innovation Lead (Karakoram)</strong>
            <p>
              <span className="quotes">
                <QuoteLeft />
              </span>
              Daniel's exceptional talent shone through as he helped us craft a
              ChatGPT demo using Next.JS. His proficiency in front-end
              development using JavaScript, React, and Next.JS was truly
              outstanding, demonstrating not only his technical prowess but also
              his ability to intuitively understand and translate our
              requirements into a highly effective prototype...
              <span className="quotes">
                <QuoteRight />
              </span>
            </p>
          </Testimonial>
        </TestimonialsContainer>
      </Wrapper>
    </AboutWrapper>
  );
}
