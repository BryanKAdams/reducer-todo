import React, { useState, useReducer } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { reducer, initialState } from '../reducers/ToDoReducer';
import Todo from "./Todo"

const TodoForm = () => {
   
    const [todos, dispatch] = useReducer(reducer, initialState)

    const [newTodo, setNewTodo] = useState('')


    const updateTodo = (data, updatingTodo) => {
    
        dispatch({
            type: 'SET_COMPLETED',
            payload: data
        })
    }

    const handleTitleChanges = changeEvent => {
    
        setNewTodo(changeEvent.target.value)

    }
    const handleFormSubmit = submitEvent => {
        submitEvent.preventDefault();
        console.log("submitting")
        console.log(newTodo)
        console.log("got here")
        console.log(newTodo, todos)
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        })

        setNewTodo('')
    }

    const clearCompleted = () => {

        dispatch({
            type: 'CLEAR_COMPLETED',
            payload: todos
        })    
      }
    
    return (
        <div>
            {todos.map((todo, i)=> (
                <Todo   key={todo.id}
                        todo={todo}
                        updateTodo={updateTodo}
                        i={i}
                        />

            ))}

            <form onSubmit={handleFormSubmit}>
                <TextField
                    value = {newTodo}
                    onChange={handleTitleChanges}
                    type="text"
                    name="todo"
                ></TextField>
                <Button  type>Add</Button>
                <Button onClick={clearCompleted}>Clear Completed</Button>

            </form>
        </div>
        
        

    )

}

export default TodoForm;