import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from "../context/TodoContext";


const TaskForm = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [deadline, setDeadline] = useState("")
    const {setTasks} = useContext(TodoContext);

    const addTask = (e) => {
        e.preventDefault()
        let newTask = {
            title: title,
            desc: desc,
            deadline: deadline,
            id: uuidv4()
        }
        setTasks(prevTasks => [...prevTasks, newTask])
    }

    return (  
        // .taskform_main
        <div className="taskform_main">
            <h3>Add a new task</h3>
            <form className="taskform_form" onSubmit={(e) => addTask(e)}>
                <label>Title:</label>
                <input type="text" required onChange={(e) => setTitle(e.target.value)}></input>
                <label>Description:</label>
                <input type="text" required onChange={(e) => setDesc(e.target.value)}></input>
                <label>Deadline:</label>
                <input type="date" required onChange={(e) => setDeadline(e.target.value)}></input>
                <button className="taskform_buttom">+ Add Task</button>
            </form>
        </div>
    );
}
 
export default TaskForm;