import Wrapper from "../styles/wrapper-styled";
import { ExpertiseMain, Card, BackgroundColorFull } from "../styles/expertise-styled";
import CodeIcon from "../icons/CodeIcon";
import ServerSvg from "../assets/server-svg.svg";

export default function Expertise() {
  return (
    <BackgroundColorFull>
      <Wrapper>
        <ExpertiseMain>
          <h1>My Area of Expertise </h1>

          <div>
            <Card>
              <div className="card-icon">
                <CodeIcon width={1} height={1} thick={1} />
              </div>
              <h2>Frontend Development</h2>
              <h5>
                Things I excel in Frontend Development include: <br />
                <span>
                  Pixel Perfect Layouts, Charts & Data Visualization, Mobile
                  First approach, 100% Responsiveness, Consistent Design, CSS
                  Libraries & Frameworks, CSS Animations, SEO
                </span>
              </h5>

              <span className="card-divider" />

              <h5>
                Languages I know: <br />
                <span>Javascript, Typescript, HTML, CSS, Scss</span>
              </h5>

              <span className="card-divider" />

              <h5>
                Libraries & Frameworks: <br />
                <span>
                  React.js, Next.js, React Native, RTK Query, Redux,
                  React-Query, Axios, Chart.js, Styled-Components, Tailwind CSS,
                  Material-UI, Vite
                </span>
              </h5>
            </Card>

            <Card>
              <div className="card-icon">
                <img src={ServerSvg} alt="server-icon" />
              </div>

              <h2>Backend Development</h2>

              <h5>
                Backend Development with the following methods: <br />
                <span>
                  API Development, Database Management, Middlewares Usage, Data
                  Validations, Error Handling, Testing, OOP, Cron jobs, Web
                  Sockets
                </span>
              </h5>

              <span className="card-divider" />

              <h5>
                Languages I know: <br />
                <span>Javascript, Typescript, Python</span>
              </h5>

              <span className="card-divider" />

              <h5>
                Libraries, Frameworks & DataBases: <br />
                <span>
                  Express, JWT, MongoDB & Mongoose, Firsebase & Firsebase
                  Functions, Moment.js, Socket.io, Docker, Kubernetes, Flask
                </span>
              </h5>
            </Card>
          </div>
        </ExpertiseMain>
      </Wrapper>
    </BackgroundColorFull>
  );
}
