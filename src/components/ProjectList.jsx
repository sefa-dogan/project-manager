export default function ProjectList({ projectList }) {
  return (
    <>
      {projectList.current.map((project) => (
        <button className="p-1">{project.title}</button>
      ))}
    </>
  );
}
