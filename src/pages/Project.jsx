import * as projects from "../assets"

function Project({ project }) {
    const { name, repo, link, description, image } = project;
  
    return (
      <div className="p-3 project">
        <img
          src={projects[image]}
          alt={name}
          className="image-size"
        />
        <div className="">
          <h3>
            <a href={link}>{name}</a>{' '}
            <a href={repo}>
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  export default Project;