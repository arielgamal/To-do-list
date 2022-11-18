import styles from "./Task.module.css";
import {Trash} from "phosphor-react";
import { useEffect, useState } from "react";

export function Task({ task, deleteTask, done, setDone }) {
  const [check, setCheck] = useState(false);
  function handleDelete() {
    if (check) {
      const changedDone = done.filter((e) => e !== task)
      setDone(changedDone);
    }
    deleteTask(task)
  }

  function handleDoneTask() {
    if (check) {
      setDone((prev) => ([...prev, task]))
    } else {
      const changedDone = done.filter((e) => e !== task)
      setDone(changedDone);
    }
  }

  useEffect(()=> {
    handleDoneTask()
  }, [check])
  
  return (
    <div className={styles.tasks}>
      <input type="checkbox" onClick={() => {
        setCheck(!check)
      }} />
      <p
        style={{
          textDecoration: check && 'line-through',
          opacity: check && 0.5,
        }}
      >{task}</p>
      <button onClick={handleDelete}>
        <Trash />
      </button>
    </div>
  );
}