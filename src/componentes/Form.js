import React from "react";
import { TodoContext } from "../TodoContext";
import '../styles/Form.css'

function Form() {
    const [newTodo, setNewTodo] = React.useState(' ');

    const { 
        addTodos,
        setOpenModal
        } = React.useContext(TodoContext);

    function onSubmit(event) {
        event.preventDefault();
        addTodos(newTodo);  
        setOpenModal(false);
    }

    function onChange (event) {
        setNewTodo(event.target.value)
    }

    function onCancel() {
       setOpenModal(false);
    }


    return (
        <form className="form" onSubmit={onSubmit}>
            <label className="form__title">Create TODO</label>
            <textarea className="form__text"
                value={ newTodo }
                onChange={onChange}
                placeholder = " Create a new TODO.."
            />
            <div className="form__btn-container">
                <button
                    className="btn-container__btn btn-cancel"
                    type="button"
                    onClick={onCancel}
                >Cancel
                </button>

                <button
                    className="btn-container__btn btn-add"
                    type="submit"
                >Add</button>
            </div>
        </form>
    );
}

export { Form };