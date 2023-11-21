import { ClipboardList } from 'lucide-react'
import { ITask } from '../../App'
import { Task } from '../Task'
import styles from './tasks.module.css'
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
  tasks: ITask[]
  onComplete: (taskId: string) => void
  onDelete: (taskId: string) => void
}

export function Tasks({ tasks, onComplete, onDelete }: Props) {
  const [parent] = useAutoAnimate()
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div ref={parent} className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <ClipboardList size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}
