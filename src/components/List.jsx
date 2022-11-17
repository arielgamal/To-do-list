import styles from "./List.module.css";

export function List() {
  return(
    <div className={styles.tasks}>
      <div className={styles.taskInfo}>
      <div>
      <p>Tarefas Criadas</p> <p>0</p>
      </div>
      <div>
      <p>Tarefas concluidas</p> <p>0</p>
      </div>
      </div>
    </div>
  );
}