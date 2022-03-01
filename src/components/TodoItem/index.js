// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, onClickDelete} = props
  const {id, title} = todo

  const Delete = () => {
    onClickDelete(id)
  }

  return (
    <li className="list">
      <p>{title}</p>
      <button className="button" type="button" onClick={Delete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
