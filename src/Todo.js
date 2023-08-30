import { useRef } from "react";

const Todo = ({text, id, onDelete, onComplete}) => {
    const spanRef = useRef(null);
    const trashBtnRef = useRef(null);

    const handleComplete = (e) => {
        if (e.target.checked) {
            spanRef.current.classList.add('completed');
            trashBtnRef.current.classList.add('trashBtnHover');
        } else {
            spanRef.current.classList.remove('completed');
            trashBtnRef.current.classList.remove('trashBtnHover');
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
            <button ref={trashBtnRef} onClick={() => onDelete(id)} className="todo__todos-item-delete">
                    <i className="icon-trash"></i>
            </button>
        </div>
    )
}

export default Todo;