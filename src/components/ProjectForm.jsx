export default function ProjectForm() {
    return (
        <>
            <div className="flex space-x-2">
                <button className="rounded-md">Cancel</button>
                <button className="bg-black rounded-md text-white">Save</button>
            </div>
            <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="dueDate">Due Date</label>
                <input type="date" id="dueDate" />
            </div>
        </>
    )
}