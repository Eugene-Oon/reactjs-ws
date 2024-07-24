import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import { useContext, useState } from 'react';
import { TodoContext } from './context/TodoContext';
import Header from './components/Header';

function App() {
  const {tasks} = useContext(TodoContext);
  // insert js 
  return (
    <div className="App">
        <Header/>
        <div className='todo_content'>
          <TaskForm/>
          <div>
            {
              tasks.map((task, key) => (
                <TaskCard {...{title: task.title, desc: task.desc, deadline: task.deadline, id: task.id}} key={key}/>
              ))
            }
          </div>
        </div>
    </div>
  );
}

export default App;
