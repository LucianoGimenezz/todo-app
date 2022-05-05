import React from 'react';
import '../styles/TodoCounter.css';

function TodoCounter(props){

    return(
        <>
            <div className='container-text'>
                <h1 className='container-text__title'>Tasks</h1>
                <h2 className='container-text__task-completed'>Completed {props.completedTask} to {props.quantityTodos}</h2>
            </div>
        </>

    );
}

export {TodoCounter};