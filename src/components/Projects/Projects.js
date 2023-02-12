import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import meetStranger from "../../Assets/Projects/m1.png";
import GoChat from "../../Assets/Projects/m2.png";
import inspire from "../../Assets/Projects/m3.png";
import movietic from "../../Assets/Projects/m4.png";
import redditClone from "../../Assets/Projects/m5.png";
import sharepic from "../../Assets/Projects/m6.png";
import FoodSpace from "../../Assets/Projects/m7.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. based on Web Development
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meetStranger}
              isBlog={false}
              title="Meet Strangers"
              description="Personal Web Cam Chat Application Made up of Javascript ,HTML and CSS and Using Webrtc and Socket.IO in backend Have option to meet stranger and can share our screen and call to the other users "
              ghLink="https://github.com/avdhendra/Meet-Strangers"
             // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoChat}
              isBlog={false}
              title="Go Chat"
              description="It is Web Chating App  using Nextjs Typescript in frontend and in backend GraphQl ,Prisma,Mongodb and SocketIO have option to create groups and chat mutiple people in open group "
              ghLink="https://github.com/avdhendra/GoChat"
            //  demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inspire}
              isBlog={false}
              title="Inspire"
              description="It is Social Media App using Reactjs,Material UI and Redux for state management and In backend Express.js for url mappping Multer for image storing in file system and mongodb for database and use jwt token for authentication"
              ghLink="https://github.com/avdhendra/Inspire"
             // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movietic}
              isBlog={false}
              title="Movietic"
              description="It is movie searching website which is built with reactjs material ui and redux for state management use TMDB Api for fetching data of Movie and search according to the Categories have features like watching movie trailers and save favorite movies and can call Alan ai for search movie for You"
              ghLink="https://github.com/avdhendra/MovieTic"
            //  demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redditClone}
              isBlog={false}
              title="Reddit Clone"
              description="It is community based social network which is built with Nextjs Typescript ChakraUI Recoil for state management and for backend use Firebase Realtime database for storing images and firestore for saving data about user and communities"
              ghLink="https://github.com/avdhendra/reddit"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sharepic}
              isBlog={false}
              title="Sharepic"
              description="It is Photo Sharing Website user user can post their photos and can download and save the image for their use and can get likes for their photos it is built on reactjs tailwind and in backend used sanity"
              ghLink="https://github.com/avdhendra/SharePic"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
       <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. based on Android Development
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodSpace}
              isBlog={false}
              title="Food Space"
              description="It is Food Delivery App that is Build on Java in Android Studio have backend integrated with Firebase firestore and Firebase database"
              ghLink="https://github.com/avdhendra/FoodSpace"
             // demoLink="https://chatify-49.web.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
