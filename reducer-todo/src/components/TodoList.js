import React, { useState, useReducer } from "react";

import { reducer, initialState } from '../reducers/ToDoReducer';

import Todo from "./Todo"

const TodoList = () => {
    console.log(todos)
    console.log("list to display", todos)
    return(

        <div>
            {todos.map((todo, i)=> (
                <Todo   key={todo.id}
                        name={todo.item}
                        />

            ))}
        </div>
    )
    
}

export default TodoList;