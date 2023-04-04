import { useParams } from "react-router-dom";
import { projects } from "./../Helpers/ProjectsList"
import Btn from "./../../components/BtnGit/Btn"
// import imgBig2 from "./../../images/projects/02-big.jpg";


const Project = () => {
  const { id } = useParams();
  const project = projects[id];
  
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img src={project.imgBin} alt={project.title} className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && <Btn link="https://github.com/Kirill-fron" />}

          
        </div>
      </div>
    </main>
  );
};

export default Project;
