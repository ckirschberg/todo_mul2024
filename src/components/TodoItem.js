import {Banana} from 'lucide-react';

function TodoItem({ key, title, completed, deadline, image }) {

    // const props = { firstname: 'Dillan', lastname: 'Larsen', age: 24, email: '2Tt9y@example.com' };
    // console.log(props.firstname);
    // console.log(props.lastname);
    
    // const { firstname, lastname, age, email } = dillan; // destructuring.
    // console.log(firstname);
    // console.log(lastname);
    


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