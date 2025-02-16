export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    if (task.id) {
      const updateTask = tasklist.map((todo) => (
        todo.id === task.id ? { ...task, name: task.name, time: `${date.toLocaleTimeString()}:${date.toLocaleDateString()}` } : todo
      ));
      setTasklist(updateTask);
    } else {
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()}:${date.toLocaleDateString()}`
      };
      setTasklist([...tasklist, newTask]);
    }
    setTask({});
    e.target.task.value = "";
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
        <button type="submit">Add</button>
      </form>
    </section>
  );
};