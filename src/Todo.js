import { useRef } from "react";

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
            <input type="checkbox" onChange={handleComplete} />
            <span ref={spanRef}>{text}</span>
            <button onClick={() => onDelete(id)} className="todo__todos-item-delete"></button>
        </div>
    )
}

export default Todo;