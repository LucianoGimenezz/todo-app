import React from 'react';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'
import { TodoList } from './TodoList';
import { Load } from './Load';
import { Postloading } from './Postloading';
import { TodoContext } from '../TodoContext'
import { Modal } from './modal';
import { Form } from './Form';

function AppUI() {
    const { error, 
            loading, 
            searchedTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal
            } = React.useContext(TodoContext);

    return (
      <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>

        <TodoList>
            {error && <p>Hubo un error...</p>}
            {loading && <Load />}
            {(!loading && !searchedTodos.length >=1) && <Postloading />}

            {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}

            />
            ))}
        </TodoList>

        {openModal && 
          <Modal>
             <Form /> 
          </Modal> 
        }
        <CreateTodoButton
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </React.Fragment>
    )
}

export { AppUI };