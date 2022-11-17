import styles from "./Task.module.css";
import {Trash} from "phosphor-react";

export function Task({ task, deleteTask }) {
  function handleDelete() {
    deleteTask(task)
  }

  return (
    <div className={styles.tasks}>
      <input type="radio" />
      <p>{task}</p>
      <button onClick={handleDelete}>
        <Trash />
      </button>
    </div>
  );
}