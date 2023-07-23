import { ContactBackground, ContactMain } from "../styles/contact-styled";
import Wrapper from "../styles/wrapper-styled";

import FacebookIcon from "../assets/social/facebook.svg";
import GithubIcon from "../assets/social/github.svg";
import LinkedInIcon from "../assets/social/linkedin.svg";
import UpworkIcon from "../assets/social/upwork.svg";

const social = [
  {
    id: "facebook-icon",
    link: "https://www.facebook.com/profile.php?id=100069513216435",
    icon: FacebookIcon,
  },
  {
    id: "github-icon",
    link: "https://github.com/danielsheetrit",
    icon: GithubIcon,
  },
  {
    id: "upwork-icon",
    link: "https://www.upwork.com/freelancers/~01ee5f9f3fb9be295e",
    icon: UpworkIcon,
  },
  {
    id: "linkedin-icon",
    link: "https://www.linkedin.com/in/daniel-sheetrit-developer/",
    icon: LinkedInIcon,
  },
];

export default function Contact() {
  return (
    <ContactBackground>
      <Wrapper>
        <ContactMain>
          <h1>You can reach out to me via:</h1>

          <div>
            {social.map((item) => {
              return (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <img src={item.icon} alt={item.id} />
                  </div>
                </a>
              );
            })}
          </div>

          <strong>sheetrit.dev@gmail.com</strong>
          <span>Crafted by Daniel Sheetrit - 2023</span>
        </ContactMain>
      </Wrapper>
    </ContactBackground>
  );
}
