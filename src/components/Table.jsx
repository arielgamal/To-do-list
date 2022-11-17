import styles from "./Table.module.css";
import { PlusCircle } from "phosphor-react";

export function Table() {
  return(
    <form className={styles.taskForm}>
    <input placeholder="Digite aqui a sua tarefa" />
    <button><strong>Criar</strong><PlusCircle size={23}/> </button>
    </form>
  );
};