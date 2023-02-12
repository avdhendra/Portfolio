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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meetStranger}
              isBlog={false}
              title="Meet Strangers"
              description="Personal Web Cam Chat Application Made up of Javascript ,HTML and CSS and Using Webrtc and Socket.IO in backend Have option to meet stranger and can share our screen and call to the other users "
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoChat}
              isBlog={false}
              title="Go Chat"
              description="It is Web Chating App  using Nextjs Typescript in frontend and in backend GraphQl ,Prisma,Mongodb and SocketIO have option to create groups and chat mutiple people in open group "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inspire}
              isBlog={false}
              title="Inspire"
              description="It is Social Media App using Reactjs,Material UI and Redux for state management and In backend Express.js for url mappping Multer for image storing in file system and mongodb for database and use jwt token for authentication"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movietic}
              isBlog={false}
              title="movietic"
              description="It is movie searching website which is built with reactjs material ui and redux for state management use TMDB Api for fetching data of Movie and search according to the Categories have features like watching movie trailers and save favorite movies and can call Alan ai for search movie for You"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redditClone}
              isBlog={false}
              title="Reddit Clone"
              description="It is community based social network which is built with Nextjs Typescript ChakraUI Recoil for state management and for backend use Firebase Realtime database for storing images and firestore for saving data about user and communities"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sharepic}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
