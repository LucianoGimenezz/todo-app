import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue } ){
    

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