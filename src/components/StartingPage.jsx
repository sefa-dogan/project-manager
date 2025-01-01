import IMG from "../assets/no-projects.png"

export default function StartingPage() {
    return (
        <div className="text-center align-middle">
            <img src={IMG} alt="Create new project" className="w-1/6" />
            <h1 className="font-bold">No project selected</h1>
            <h3>Select a project or get started with a new one</h3>
            <button className="rounded-md bg-gray-400 p-3">Create new Project</button>
        </div>
    )
}