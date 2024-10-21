const todoItemStyle = {
    color: 'blue',
    padding: '1.5em',
 }

function TodoItem(props) {
    return (
        <div style={todoItemStyle}>{props.title}</div>
    )
}

export default TodoItem;