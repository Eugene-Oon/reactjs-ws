import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TaskCard = ({
    title, 
    desc, 
    deadline,
    id
}) => {
    const {tasks, setTasks} = useContext(TodoContext)
    const completeTask = () => {
        setTasks(prevtasks => prevtasks.filter(task => task.id != id))
        console.log("hi")
    }
    return (  
        <div className="taskcard_main">
            <button className="taskcard_button" onClick={() => completeTask()}></button>
            <div>
                <h3 className="taskcard_title">{title}</h3>
                {/* h3.taskcard_title */}
                <p className="taskcard_desc">{desc}</p>
                <p className="taskcard_deadline">Deadline: {deadline}</p>
            </div>
        </div>
    );
}
 
export default TaskCard;