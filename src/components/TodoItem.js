import {Banana} from 'lucide-react';

function TodoItem({ key, title, completed, deadline, image }) {

    const timestamp = new Date(); //new Date giver dato og tid lige nu.

    const todoItemStyle = {
        color: 'white',
        padding: '1.5em',
        textDecoration: completed ? 'line-through' : 'none'
     }

    return (
        <div id={key} style={todoItemStyle}>
            { timestamp > deadline && <Banana /> }
            {title}
            <img src={image} alt="image"/>
        </div>
    )
}

export default TodoItem;