import React from 'react';
import '../styles/TodoList.css';

function TodoList(props){
    return(
        <section className='todos'>
            <ul className='todos__container'>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };