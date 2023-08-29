import {useState, useId} from 'react';

import todoLogo from './img/todoLogo.svg';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text, id) => {
        const todo = {
            id,
            text,
            done: false
        }

        setTodos(todo);
    }

    const renderTodos = () => {
        todos.forEach(todo => {
            if (todo.done) {
                return;
            }
    
            return `
                <div class="todo">
                    <div id="check">
                        <input type="checkbox">
                    </div>
                    <span id="text">${todo.text}</span>
                    <button data-id="${todo.id}" class="delete"></button>
                </div>
            `;
        });
    }

    return (
        <div className="todo">
        <header>
            <img src={todoLogo} alt="todoLogo" />
        </header>
        <div className="todo__main">
            <div className="todo__main-wrapper">
                <div className="todo__header">
                    <input type="text" name="todo" placeholder="Add a new Task" id="todo" className="todo__input" />
                    <button className="todo__add-btn">
                        Create
                        <i className="icon-plus"></i>
                    </button>
                </div>
                <div className="todo__counters">
                    <div className="todo__counters-item todo__counters-item_created">
                        Created Tasks:
                        <span>0</span>
                    </div>
                    <div className="todo__counters-item todo__counters-item_done">
                        Done Tasks:
                        <div className="todo__counters-item_done_wrapper">
                            <span>0</span> 
                            <div className="of">of</div> 
                            <span>0</span>
                        </div>    
                    </div>
                </div>
                <div className="todo__todos">
                    {renderTodos()}
                </div>
            </div>
        </div>
        </div>
    );
}

export default App;
