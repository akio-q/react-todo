import { useState, useRef } from "react";

import edit from './img/edit.svg';

const Todo = ({text, id, onDelete, onComplete, onEdit}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);
    const textRef = useRef(null);

    const handleComplete = (e) => {
        if (e.target.checked) {
            textRef.current.classList.add('completed');
        } else {
            textRef.current.classList.remove('completed');
        }

        onComplete(id, e.target.checked)
    }

    const handleEdit = () => {
        setIsEditing(true);
        setTimeout(() => {
            textRef.current.focus();
          }, 0);
    }
    
    const handleSave = () => {
        onEdit(id, editedText);
        setIsEditing(false);
    }

    const handleInputChange = (e) => {
        setEditedText(e.target.value);
    }

    const handleEditTodoOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        } 
    }
    
    return (
        <div className="todo__todos-item">
            <div className="todo__todos-item_main">
                <div>
                    <input type="checkbox" onChange={handleComplete} />
                </div>
                {isEditing ? (
                    <input 
                        ref={textRef} 
                        readOnly={!isEditing}
                        value={editedText}
                        onChange={handleInputChange}
                        onKeyDown={handleEditTodoOnKeyPress}
                        className="todo__todos-item-text" />
                ) : 
                <span ref={textRef} className="todo__todos-item-text">{editedText}</span>}
            </div>
            <div className="todo__todos-item_tools">
                {isEditing ? (
                    <button className="todo__todos-item-save" onClick={handleSave}>
                        <i className="icon-check-solid"></i>
                    </button>
                ) : (
                    <button className="todo__todos-item-edit" onClick={handleEdit}>
                        <img src={edit} alt="Edit todo" />
                    </button>
                )}
                <button className="todo__todos-item-delete" onClick={() => onDelete(id)}>
                    <i className="icon-trash"></i>
                </button>
            </div>
            
        </div>
    )
}

export default Todo;