import React from 'react';
import '../styles/TodoItem.css';
import { AiFillCheckCircle } from 'react-icons/ai';
 
function TodoItem(props){
    return(
        <li className='todo-item'>
            <span 
                className={` icon todo-item__check ${props.completed &&  ' icon todo-item--cheked'}`}
                onClick={props.onComplete}    
            ><AiFillCheckCircle className={`icon-check ${props.completed && 'icon-cheked'}`}/></span>
            <p className={`todo-item__text ${props.completed && 'todo-item__text--cheked'}`}>{props.text}</p>
            <span 
                className={`icon todo-item__delete ${props.completed && 'icon todo-item__deleted'}`}
                onClick={props.onDelete}
            >x</span>
        </li>
    );
}

export { TodoItem };