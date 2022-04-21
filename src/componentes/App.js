// import './App.css';
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   {
//     text:'Leer un libro',
//     completed:false
//   },{
//     text:'Correr en la plaza',
//     completed:false
//   },{
//     text:'Estudiar FOD',
//     completed:false
//   }
// ];

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
