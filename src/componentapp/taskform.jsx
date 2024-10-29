import { useState } from "react"


export default function TaskForm() {
    const [tasks, setTasks] = useState('');
    const [tasksBox, setTasksBox] = useState([]);

    function addTask(taskName) {
        const newTask = {
            id: Date.now(),
            name: taskName
        };
        setTasksBox([...tasksBox, newTask]);
    }

    return (
    <div className="bg-gray-200 p-5 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-5">Task Tracker</h1>

        <input type="text" value={tasks} placeholder="Add a new task"  className="p-2 rounded-l-lg"
        onChange={e => setTasks(e.target.value)}/>

        <button onClick={() => addTask(tasks)} className="bg-blue-700 text-white font-semibold p-2 rounded-r-lg">Add</button>

        <ul className="mt-4">
            {tasksBox.map(taskBox => (
                <li key={taskBox.id} className="list-disc list-inside">{taskBox.name}</li>
            ))}
        </ul>
    </div>
    )
}