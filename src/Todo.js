const Todo = ({text, id, onDelete, spanRef, onComplete}) => {
    return (
        <div className="todo__todos-item">
            <input type="checkbox" onChange={onComplete} />
            <span ref={spanRef}>{text}</span>
            <button onClick={() => onDelete(id)} className="todo__todos-item-delete"></button>
        </div>
    )
}

export default Todo;