import styles from "./Table.module.css";
import { PlusCircle } from "phosphor-react";

export function Table({handleTaskList, handleTaskInput, newTask}) {
  return(
    <form className={styles.taskForm}>
    <input value={newTask} placeholder="Digite aqui a sua tarefa" onChange={handleTaskInput} />
    <button type="button" onClick={handleTaskList}><strong>Criar</strong><PlusCircle size={23}/> </button>
    </form>
  );
};