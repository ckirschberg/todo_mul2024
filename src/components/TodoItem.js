

function TodoItem(props) {

    const todoItemStyle = {
        color: 'blue',
        padding: '1.5em',
        textDecoration: props.completed ? 'line-through' : 'none'
     }

    return (
        <div id={props.id} style={todoItemStyle}>{props.title}</div>
    )
}

export default TodoItem;