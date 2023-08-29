const Todo = ({text, id, onDelete}) => {
    return (
        <div className="todo__todos-item">
            <input type="checkbox" />
            <span>{text}</span>
            <button onClick={() => onDelete(id)} className="todo__todos-item-delete"></button>
        </div>
    )
}

export default Todo;