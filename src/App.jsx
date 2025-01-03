import { useState, useRef } from "react";
import CreateProject from "./components/CreateProject";
import StartingPage from "./components/StartingPage";
import ProjectList from "./components/ProjectList";

function App() {
  const [isCreatingProject, setIsCreatingProject] = useState();
  const projectList = useRef([]);

  function createProject() {
    setIsCreatingProject(true);
  }
  function handleCreateProject(title, description, dueDate) {
    projectList.current.push({
      title: title,
      description: description,
      dueDate: dueDate,
    });
    setIsCreatingProject(false);
  }
  return (
    <div className="flex flex-row mt-10 h-screen">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <div className="bg-black w-1/3 text-white">
        <h1>Your Projects</h1>
        <li className="flex flex-col w-1/3 m-5">
          <button
            className="bg-gray-500 p-2 rounded-md"
            onClick={createProject}
          >
            +Add Project
          </button>
          {projectList && !isCreatingProject && (
            <ProjectList projectList={projectList} />
          )}
        </li>
      </div>
      <div className="w-2/3">
        {isCreatingProject && (
          <CreateProject handleCreateProject={handleCreateProject} />
        )}
        {!isCreatingProject && <StartingPage onClick={createProject} />}
      </div>
    </div>
  );
}

export default App;
