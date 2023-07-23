import Wrapper from "../styles/wrapper-styled";
import { ProjectsMain, ProjectsGrid } from "../styles/projects-styled";

import HomiePic from "../assets/videos/Homie.mp4";
import ShavimPic from "../assets/videos/Shavim.mp4";
import TeacherAIPic from "../assets/videos/TeacherAI.mp4";
import JobSeekerPic from "../assets/videos/JobSeeker.mp4";

const data = [
  {
    id: 1,
    title: "Homie",
    src: HomiePic,
    desc: "A comprehensive end-to-end project, an Airbnb clone built with React and Node.js. Main feature is sophisticated filter which helps user filter the results from wide range of assets.",
    hashtags:
      "#React.js #Socket.io #Scss #Express #MongoDB #Mongoose #Pixel-Perfect #Redux",
  },
  {
    id: 2,
    title: "Shavim",
    src: ShavimPic,
    desc: "Shavim aid system, designed to integrate mentally challenged individuals into daily factory work, enables real-time tracking of workers' activities on the coach's dashboard for efficient supervision.",
    hashtags:
      "#React.js #Vite #Socket.io #Node.js #Cron-jobs #Material-UI #JWT-Auth",
  },
  {
    id: 3,
    title: "TeacherAI",
    src: TeacherAIPic,
    hashtags: "#Next.js-13.4 #D-ID #ChatGPT #JWT-Auth #Tailwind-CSS",
    desc: "An MVP ed-tech platform featuring an intelligent teacher chatbot powered by OpenAI's ChatGPT and a video chat enabled by D-ID technology.",
  },
  {
    id: 4,
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
              <div className="grid-item" key={item.id}>
                <video src={item.src} controls preload="metadata" type="video/mp4" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <span>{item.hashtags}</span>
                </div>
              </div>
            );
          })}
        </ProjectsGrid>
      </ProjectsMain>
    </Wrapper>
  );
}
