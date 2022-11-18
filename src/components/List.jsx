import styles from "./List.module.css";
import {ClipboardText} from "phosphor-react";
import { Task } from "./Task";
import { useState } from "react";

export function List({ task, setTask }) {
  const [done, setDone] = useState([]);

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
          <p className={styles.p1}>Tarefas criadas {task.length}</p>
          <p className={styles.p2}>Concluidas {done.length} de {task.length}</p>
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
            {task.map((element) => <Task task={element} key={element} deleteTask={deleteTask} done={done} setDone={setDone} />)}
          </div>
        }
    </article>
  );
}