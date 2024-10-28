

function TodoItem({ key, title, completed }) {

    const todoItemStyle = {
        color: 'white',
        padding: '1.5em',
        textDecoration: completed ? 'line-through' : 'none'
     }

    return (
        <div id={key} style={todoItemStyle}>{title}</div>
    )
}

export default TodoItem;