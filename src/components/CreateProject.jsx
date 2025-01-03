import { useRef } from "react";
export default function ProjectForm({ handleCreateProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  return (
    <>
      <div className="flex space-x-2">
        <button className="rounded-md">Cancel</button>
        <button
          className="bg-black rounded-md text-white"
          onClick={() =>
            handleCreateProject(
              title.current.value,
              description.current.value,
              date.current.value
            )
          }
        >
          Save
        </button>
      </div>
      <div className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input ref={title} type="text" id="title" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description">Description</label>
        <input ref={description} type="text" id="description" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="dueDate">Due Date</label>
        <input ref={date} type="date" id="dueDate" />
      </div>
    </>
  );
}
