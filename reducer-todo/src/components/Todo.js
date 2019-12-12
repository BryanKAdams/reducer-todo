import React from "react";
import Button from '@material-ui/core/Button';

const Todo = (props) => {
    return (
        <div className={`item${      props.todo.completed ? 'Completed': ''      }`}
            style={props.todo.completed ? {textDecoration: 'line-through'} : null}
            onClick={() => (props.updateTodo(props.i, props.todo))}>
            <Button>{props.todo.item}</Button>
        </div>

    )
}

export default Todo;