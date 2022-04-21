import { findAllByDisplayValue } from "@testing-library/react";
import React from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const [openModal, setOpenModal] = React.useState(false);

    const {todos, saveToLocalStorage,loading, error}= useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    
    const completedTask = todos.filter(todo => todo.completed).length;
    
    const quantityTodos = todos.length;
  
    //El siguente bloque de codigo sirve para filtrar los TODOs
  
    let searchedTodos = [];
  
    if(!searchValue.length >= 1) {
       searchedTodos = todos;
    } else {
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    }
  
    const completeTodos = (text) => {
      const index = todos.findIndex((todo) => todo.text === text);
      if(!todos[index].completed){
        todos[index].completed = true
      }else {
        todos[index].completed = false
      }
      const newTodos =[...todos];
      saveToLocalStorage(newTodos);
    };
  

    const deleteTodos = (text) => {
      const newTodos = todos.filter(todo => todo.text !== text);
      saveToLocalStorage(newTodos);
    }


    const addTodos = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        if(newTodos[newTodos.length - 1].text === ' '){
          return;
        }
        saveToLocalStorage(newTodos);
      }

    return (
         <TodoContext.Provider value={{
            loading,
            error,
            quantityTodos,
            completedTask,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            addTodos,
            openModal,
            setOpenModal
         }}>
             {props.children}
         </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };
