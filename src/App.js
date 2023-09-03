import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import TodoList from './components/TodoList';
import TodoAddInput from './components/TodoAddInput';
import Counters from './components/Counters';
import NoTasks from './components/NoTasks';

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

        updatedTodos.sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));

        setTodos(updatedTodos);
    } 

    const editTodo = (id, newText) => {
        setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    }

    const handleAddInputChange = (e) => {
        setText(e.target.value)
    }

    const handleAddTodoOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo(text);
        }
    }

    return (
        <div className="todo">
        <header>
            <img src={todoLogo} alt="todoLogo" />
        </header>
        <div className="todo__main">
            <div className="todo__main-wrapper">
                <TodoAddInput 
                    text={text}
                    addTodo={addTodo}
                    handleAddInputChange={handleAddInputChange}
                    handleAddTodoOnKeyPress={handleAddTodoOnKeyPress} />
                <Counters todos={todos} />
                {
                    todos.length === 0 ? (
                        <NoTasks />
                    ) : null
                }
                <TodoList 
                    todos={todos} 
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo}
                    editTodo={editTodo} />
            </div>
        </div>
        </div>
    );
}

export default App;
