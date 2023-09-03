const Counters = ({todos}) => {
    const doneTasksCounter = todos.filter(todo => todo.done).length;

    return (
        <div className="todo__counters">
            <div className="todo__counters-item todo__counters-item_created">
                Created Tasks:
                <span>{todos.length}</span>
            </div>
            <div className="todo__counters-item todo__counters-item_done">
                Done Tasks:
                <div className="todo__counters-item_done_wrapper">
                    <span>{doneTasksCounter}</span> 
                    <div className="of">of</div> 
                    <span>{todos.length}</span>
                </div>    
            </div>
        </div>
    )
}

export default Counters;