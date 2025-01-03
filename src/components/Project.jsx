import TaskList from "./TaskList.jsx";
export default function Project({ title, date, description }) {
  return (
    <>
      <div>
        <title>{title}</title>
        <button></button>
      </div>
      <span>{date}</span>
      <p>{description}</p>
      <hr />
      <title>Tasks</title>
      <div>
        <input type="text" />
        <button>Add Task</button>
      </div>
      <TaskList />
    </>
  );
}
