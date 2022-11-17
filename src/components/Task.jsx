import styles from "./Task.module.css";
import {Trash} from "phosphor-react";

export function Task() {
  return (
    <div className={styles.tasks}>
      <input type="radio" />
      <p>Ir no supermercado</p>
      <button>
        <Trash />
      </button>
    </div>
  );
}