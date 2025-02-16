export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTaskList = tasklist.map((task) => (
        task.id === task.id ? { id:task.id, name: task.name, time: `${date.toLocaleTimeString()}:${date.toLocaleDateString()}` } : task));
      setTasklist(updatedTaskList);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()}:${date.toLocaleDateString()}`
      };
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.name || ''}
          placeholder="Add Task"
          name="task"
          autoComplete="off"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" :  "Add"}</button>
      </form>
    </section>
  );
};