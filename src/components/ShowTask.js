export const ShowTask = () => {
  const task = [{id: 10001, name: "Task A", time: "2:09:01 AM 9/14/2030"},
    {id: 10002, name: "Task B", time: "2:09:01 AM 9/14/2030"},
    {id: 10003, name: "Task C", time: "2:09:01 AM 9/14/2030"},
  ];


  return (
    <section className="showTask">
        <div className="head">
            <div>
              <span className="title">Todo</span>
              <span className="count">0</span>  
            </div>
            <button className="clearAll">Clear All</button>
        </div>
        <ul>
            {task.map((task) => (
                <li>
                  <p>
                    <span className="name">{task.name}</span>
                    <span className="time">{task.time}</span>
                </p>
                <i class="bi bi-pencil-square"></i>
                <i class="bi bi-trash"></i>
              </li>
            ))}
          
        </ul>
    </section>
  )
}
