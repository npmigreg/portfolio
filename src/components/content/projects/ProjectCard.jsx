import ProjectLabel from "./ProjectLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (props) => {
  const { project } = props;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`p-6 rounded-lg ${
        project.href ? "hover:bg-gray-800 hover:cursor-pointer" : ""
      }`}
    >
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-bold text-lg text-sky-400">{project.title}</h3>
        {project.href && <FontAwesomeIcon icon={faSquareArrowUpRight} />}
      </div>
      <div className="flex flex-row justify-between mb-4 text-gray-100">
        <h4>{project.location}</h4>
        <p>{project.time}</p>
      </div>
      <p className="text-sm">{project.text}</p>
      <div className="mt-2 text-xs text-gray-100">
        {project &&
          project.skills?.map((s, index) => {
            return <ProjectLabel key={index} label={s} />;
          })}
      </div>
    </a>
  );
};

export default ProjectCard;
