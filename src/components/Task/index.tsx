import styles from './task.module.css'
import { Trash2, CheckCircle2 } from 'lucide-react'
import { ITask } from '../../App'

interface Props {
  task: ITask
  onComplete: (taskId: string) => void
  onDelete: (taskId: string) => void
}

export function Task({ task, onComplete, onDelete }: Props) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <CheckCircle2 /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ''}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <Trash2 size={20} />
      </button>
    </div>
  )
}
