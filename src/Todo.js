import { useRef } from "react";

import edit from './img/edit.svg';

const Todo = ({text, id, onDelete, onComplete}) => {
    const spanRef = useRef(null);

    const handleComplete = (e) => {
        if (e.target.checked) {
            spanRef.current.classList.add('completed');
        } else {
            spanRef.current.classList.remove('completed');
        }

        onComplete(id, e.target.checked)
    }

    return (
        <div className="todo__todos-item">
            <div className="todo__todos-item_main">
                <div>
                    <input type="checkbox" onChange={handleComplete} />
                </div>
                <span ref={spanRef}>{text}</span>
            </div>
            <div className="todo__todos-item_tools">
                <button className="todo__todos-item-edit">
                    <img src={edit} alt="Edit todo" />
                </button>
                <button onClick={() => onDelete(id)} className="todo__todos-item-delete">
                    <i className="icon-trash"></i>
                </button>
            </div>
            
        </div>
    )
}

export default Todo;