import ProjectForm from "./components/ProjectForm"
import StartingPage from "./components/StartingPage"

function App() {
  return (
    <div className="flex flex-row mt-10 h-screen">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <div className="bg-black w-1/3 text-white">
        <h1>Your Projects</h1>
        <button className="bg-gray-500 p-2 rounded-md">
          +Add Project
        </button>
      </div>
      <div className="w-2/3">
        {/* <ProjectForm /> */}
        <StartingPage></StartingPage>
      </div>
    </div>
  );
}

export default App;
