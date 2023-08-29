const Todo = ({text, id}) => {
    return (
        <div className="todo">
            <div id="check">
                <input type="checkbox" />
            </div>
            <span id="text">{text}</span>
            <button data-id={id} className="delete"></button>
        </div>
    )
}

export default Todo;