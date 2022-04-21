import React from 'react';
import '../styles/TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch(){
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    

    const filterTask = (event) => {
        setSearchValue(event.target.value);
    }

    return(
        <section className='search-container'>
            <input 
                className='todo-search' placeholder='Search..' 
                value={searchValue}
                onChange={filterTask}
            />
        </section>
    );

}

export { TodoSearch };