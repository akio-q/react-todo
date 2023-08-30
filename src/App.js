import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import Todo from './Todo';

import todoLogo from './img/todoLogo.svg';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const addTodo = (text) => {
        if (text.trim() === '') {
            alert('Please, enter a task');
            return;
        }

        const newTodo = {
            id: uuidv4(),
            text,
            done: false
        }

        setTodos([...todos, newTodo]);
        setText('');
    }


    const deleteTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    }
    
    const completeTodo = (id, isDone) => {
        const updatedTodos = todos.map(todo => 
            todo.id === id ? {...todo, done: isDone} : todo
        )

        setTodos(updatedTodos);
    } 

    const doneTasksCounter = todos.filter(todo => todo.done).length;

    return (
        <div className="todo">
        <header>
            <img src={todoLogo} alt="todoLogo" />
        </header>
        <div className="todo__main">
            <div className="todo__main-wrapper">
                <div className="todo__header">
                    <input 
                        type="text" 
                        name="todoText" 
                        placeholder="Add a new task" 
                        className="todo__input"
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
                    <button 
                        className="todo__add-btn"
                        onClick={() => addTodo(text)}>
                        Create
                        <i className="icon-plus"></i>
                    </button>
                </div>
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
                <div className="todo__todos">
                    {
                        todos.map(todo => {
                            return <Todo 
                                        key={todo.id} 
                                        text={todo.text} 
                                        id={todo.id}
                                        onDelete={deleteTodo}
                                        onComplete={completeTodo} />
                        })
                    }
                </div>
            </div>
        </div>
        </div>
    );
}

export default App;
