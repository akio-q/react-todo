const Todo = ({text, id}) => {
    return (
        <div className="todo__todos-item">
            <div id="check">
                <input type="checkbox" />
            </div>
            <span id="text">{text}</span>
            <button data-id={id} className="todo__todos-item-delete"></button>
        </div>
    )
}

export default Todo;