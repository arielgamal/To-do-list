import styles from "./List.module.css";
import {ClipboardText} from "phosphor-react";
import { Task } from "./Task";

export function List({ task, setTask }) {
  function deleteTask(tasktoDelete) {
    const taskWithoutDeletedOne = task.filter((element) => {
    return element != tasktoDelete
    })
    setTask(taskWithoutDeletedOne);
  }

  return(
    <article>
      <div className={styles.tasks}>
        <div className={styles.taskInfo}>
          <p>Tarefas criadas {task.length}</p>
          <p>Tarefas concluidas 0</p>
        </div>
      </div>
        {
          task.length === 0 
          ?
          <div className={styles.taskList}>
            <ClipboardText size={40} />
            <strong> Voce ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div> 
          :
          <div>
            {task.map((element) => <Task task={element} key={element} deleteTask={deleteTask} />)}
          </div>
        }
    </article>
  );
}