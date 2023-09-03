const TodoAddInput = ({text, addTodo, handleAddInputChange, handleAddTodoOnKeyPress}) => {
    

    return (
        <div className="todo__header">
            <input 
                type="text" 
                name="todoText" 
                placeholder="Add a new task" 
                className="todo__input"
                value={text}
                onChange={handleAddInputChange}
                onKeyDown={handleAddTodoOnKeyPress} />
            <button 
                className="todo__add-btn"
                onClick={() => addTodo(text)}>
                <div className='todo__add-btn_inner'>Create</div>
                <i className="icon-plus"></i>
            </button>
        </div>
    )
}

export default TodoAddInput;