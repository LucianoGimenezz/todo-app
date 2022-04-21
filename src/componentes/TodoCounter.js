import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
    const { completedTask:completed, quantityTodos:quantity}  = React.useContext(TodoContext);

    return(
        <>
            <div className='container-text'>
                <h1 className='container-text__title'>Tasks</h1>
                <h2 className='container-text__task-completed'>Completed {completed} to {quantity}</h2>
            </div>
        </>

    );
}

export {TodoCounter};