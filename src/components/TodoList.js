import Todo from "./Todo";

const TodoList = ({todos, deleteTodo, completeTodo, editTodo}) => {
    return (
        <div className="todo__todos">
            {
                todos.map(todo => {
                    return <Todo 
                                key={todo.id} 
                                text={todo.text} 
                                id={todo.id}
                                onDelete={deleteTodo}
                                onComplete={completeTodo}
                                onEdit={editTodo} />
                })
            }
        </div>
    )
}

export default TodoList;