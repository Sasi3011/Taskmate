export const AddTask = () => {
  return (
    <section className="addTask">
        <form>
            <input type="text" placeholder="Add Task" name="task" autoComplete="off" maxLength="25"/>
            <button type="submit">Add</button>
        </form>
    </section>
  )
}
