import React from 'react';

const Todo = (props) => {
    const completedStyle = {
        fontStyle: 'italic',
        textDecoration: 'line-through',
        color: 'grey'
    }
    
    return (
        <div className="todo__item">
            <input 
            type="checkbox" 
            checked = {props.item.completed} 
            onChange={() => props.handleChange(props.item.id)}/>
            <p style = {props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    );
}

export default Todo;
