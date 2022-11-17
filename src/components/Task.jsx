import styles from "./Task.module.css";
import {Trash} from "phosphor-react";

export function Task({task}) {
  return (
    <div className={styles.tasks}>
      <input type="radio" />
      <p>{task}</p>
      <button>
        <Trash />
      </button>
    </div>
  );
}