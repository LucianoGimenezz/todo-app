import React from 'react';
import '../styles/TodoButton.css';

function CreateTodoButton(props){
    const eventClick = () => {
        props.setOpenModal(state => !state)
    }


    return(
        <div className='container-btn'>
            <button 
                className='btn-create'
                type='button'
                onClick={eventClick}
            >+</button>
        </div>
    );
}

export { CreateTodoButton };