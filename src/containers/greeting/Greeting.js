import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Senior Backend AI Engineer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Python & FastAPI Developer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Generative AI & LLM Engineer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Microservices Architect")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Cloud Engineer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Data Scientist ")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Data Analyst")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("ECE Engineer")
                      .pauseFor(200)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  A <mark data-entity="noun">Senior Backend AI Engineer</mark>{" "}
                  with <mark data-entity="verb">6+ years</mark> building
                  production systems in{" "}
                  <mark data-entity="skill">Python, FastAPI & AWS</mark>, from{" "}
                  <mark data-entity="freelance">
                    Generative AI and RAG pipelines to event-driven
                    microservices
                  </mark>{" "}
                  serving millions of users
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={
                    (greeting.resumeLink =
                      "https://www.linkedin.com/in/jatin-kaushik/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADDQg8QBf9pFUi61iKiGqe_lfNOzWaOZueI,1635460507931)/")
                  }
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
