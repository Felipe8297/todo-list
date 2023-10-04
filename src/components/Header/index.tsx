import { ChangeEvent, FormEvent, useState } from 'react'
import todoLogo from '../../assets/todoLogo.svg'
import styles from './header.module.css'
import { PlusCircle } from 'lucide-react'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(title)
    setTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="" />
      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={title}
          onChange={onChangeTitle}
        />
        <button type="submit">
          Criar <PlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}
