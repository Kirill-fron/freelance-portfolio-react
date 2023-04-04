import Project from "../Project/Project";

import { projects } from "./../Helpers/ProjectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((projects, index) => {
            return <Project 
            key={index} 
            title={projects.title} 
            img={projects.img} 
            index={index}
            />;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
