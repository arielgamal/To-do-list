import styles from "./List.module.css";
import {ClipboardText} from "phosphor-react";
import { Task } from "./Task";

export function List({ comment }) {

  return(
    <article>
      <div className={styles.tasks}>
        <div className={styles.taskInfo}>
          <p>Tarefas criadas {comment.length}</p>
          <p>Tarefas concluidas 0</p>
        </div>
      </div>
        {
          comment.length === 0 
          ?
          <div className={styles.taskList}>
            <ClipboardText size={40} />
            <strong> Voce ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div> 
          :
          <div>
          <Task />
          </div>
        }
    </article>
  );
}