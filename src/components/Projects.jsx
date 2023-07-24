import Wrapper from "../styles/wrapper-styled";
import { ProjectsMain, ProjectsGrid } from "../styles/projects-styled";

// import HomiePic from "../assets/videos/Homie.mp4";
// import ShavimPic from "../assets/videos/Shavim.mp4";
import TeacherAIPic from "../assets/videos/TeacherAI.mp4";
import JobSeekerPic from "../assets/videos/JobSeeker.mp4";
import CeciliaPic from "../assets/imgs/cecilia.jpg";

// posters


const data = [
  {
    title: "Cecilia.ai",
    type: "img",
    link: "https://cecilia.ai/",
    src: CeciliaPic,
    desc: "Landing page and blog system meticulously designed for the 'First Interactive Bartender', a website replete with detail-oriented designs and carefully attended features.",
    hashtags: "#Next.js #Sanity #Styled-components #Material-UI",
  },
  {
    title: "Homie",
    src: "https://res.cloudinary.com/dvbojtbzc/video/upload/v1690192648/Homie-small_ucwnj0.mp4",
    desc: "A comprehensive end-to-end project, an Airbnb clone built with React and Node.js. Main feature is sophisticated filter which helps user filter the results from wide range of assets.",
    hashtags:
      "#React.js #Socket.io #Scss #Express #MongoDB #Mongoose #Pixel-Perfect #Redux",
  },
  {
    title: "Shavim",
    src: "https://res.cloudinary.com/dvbojtbzc/video/upload/v1690192252/Shavim_q49x55.mp4",
    desc: "Shavim aid system, designed to integrate mentally challenged individuals into daily factory work, enables real-time tracking of workers' activities on the coach's dashboard for efficient supervision.",
    hashtags:
      "#React.js #Vite #Socket.io #Node.js #Cron-jobs #Material-UI #JWT-Auth",
  },
  {
    title: "TeacherAI",
    src: TeacherAIPic,
    hashtags: "#Next.js-13.4 #D-ID #ChatGPT #JWT-Auth #Tailwind-CSS",
    desc: "An MVP ed-tech platform featuring an intelligent teacher chatbot powered by OpenAI's ChatGPT and a video chat enabled by D-ID technology.",
  },
  {
    title: "Show Job",
    src: JobSeekerPic,
    hashtags: "#React Native, #Jobs-api",
    desc: "A look-a-like job search app, compatible with both iOS and Android, showcasing a simple and attractive user interface.",
  },
];

export default function Projects() {
  return (
    <Wrapper id="projects-section">
      <ProjectsMain>
        <h1>My Recent Work</h1>

        <ProjectsGrid>
          {data.map((item) => {
            return (
              <div className="grid-item" key={item.title}>
                {item.type === "img" ? (
                  <img src={item.src} alt={item.title} />
                ) : (
                  <video
                    src={item.src}
                    controls
                    preload="metadata"
                    type="video/mp4"
                  />
                )}
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <span>{item.hashtags}</span>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      Visit {item.title}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </ProjectsGrid>
      </ProjectsMain>
    </Wrapper>
  );
}
