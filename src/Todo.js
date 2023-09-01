import { useState, useRef } from "react";

import edit from './img/edit.svg';

const Todo = ({text, id, onDelete, onComplete}) => {
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
        textRef.current.readOnly = false;
    }
    
    const handleSave = () => {
        setIsEditing(false);
        textRef.current.readOnly = true;
    }

    const handleInputChange = (e) => {
        setEditedText(e.target.value);
    }
    
    return (
        <div className="todo__todos-item">
            <div className="todo__todos-item_main">
                <div>
                    <input type="checkbox" onChange={handleComplete} />
                </div>
                <input 
                    ref={textRef} 
                    type="text" 
                    readOnly={!isEditing}
                    value={editedText}
                    onChange={handleInputChange}
                    className="todo__todos-item-text" />
            </div>
            <div className="todo__todos-item_tools">
                {isEditing ? (
                    <button className="todo__todos-item-save" onClick={handleSave}>
                        Save
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