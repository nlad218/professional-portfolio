import Project from "./Project";


function Portfolio() {
  // fill in the required data, image file should be in the assets folder and name should match exactly including extension
  const projects = [
    {
      name: "Snif",
      description: "Full-stack application.",
      link: "https://stormy-mesa-49272-df30e734d644.herokuapp.com/",
      repo: "https://github.com/nlad218/dog-dating-app",
      image: "snif",
    },
    {
      name: "Eventful Sky",
      description: "HTML/JS/CSS",
      link: "https://nlad218.github.io/Eventful-sky/",
      repo: "https://github.com/nlad218/Eventful-sky",
      image: "eventfulsky",
    },
    {
      name: "ShredNStyle",
      description: "NRG Stack",
      link: "https://shrednstyle-a1ce73eecb82.herokuapp.com/",
      repo: "https://github.com/nlad218/ShredNStyle",
      image: "shrednstyle",
    },
    {
      name: "Weather Dashboard",
      description: "NRG Stack",
      link: "https://nlad218.github.io/weather-dashboard/",
      repo: "https://github.com/nlad218/weather-dashboard",
      image: "weatherapp",
    },
    {
      name: "Employee Tracker",
      description: "NRG Stack",
      link: "https://github.com/nlad218/employee-tracker",
      repo: "https://github.com/nlad218/employee-tracker",
      image: "employeetracker",
    },
    {
      name: "Note Take App",
      description: "NRG Stack",
      link: "https://jnotetaker-4a253a261f22.herokuapp.com/",
      repo: "https://github.com/nlad218/PWA",
      image: "notetaker",
    },
  ];

  // for each project, use the Project component to build a project
  return (
    <div>
      <div className="project-div">
      {projects.map((project) => (
        <Project project={project} key={"project=" + project.name} />
      ))}
      </div>
    </div> 
  );
}

export default Portfolio;
