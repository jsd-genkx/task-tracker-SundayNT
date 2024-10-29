import { useState } from "react"

export default function Task() {
  const [tasks, setTasks] = useState([]);

function addtask(newTask) {
 setTasks(prevTask => [...prevTask, newTask])
}

  return (
    <div>
      <h1 className="text-3xl font-extrabold">Task Tracker</h1>
      <input type="text" placeholder="Add a new Task" />
      <button>Add</button>
    </div>
  )
}




