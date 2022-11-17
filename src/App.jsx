import { useState } from "react"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { Table } from "./components/Table"
import "./global.css"

export function App() {
  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState([]);

  function handleTaskInput({target}) {
    setNewTask(target.value)
  }

  function handleTaskList() {
    setTask((prev) => ([ ...prev, newTask]));
    setNewTask("");
  }

  return (
    <div className="App">
      <Header />
        <Table handleTaskList={handleTaskList}  handleTaskInput={handleTaskInput} newTask={newTask}/>
        <List task={task} />
    </div>
  )
}


