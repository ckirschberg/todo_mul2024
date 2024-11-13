import { useState } from 'react';

// js - destructure - pakker attributter fra et objekt op.
function AddTodo({todos, setTodos}) {
    const [todo, setTodo] = useState(''); // what the user sees in the input type="text"
    const [error, setError] = useState(null);

    // const handleOnTodoChange = (event) => {
    //     console.log(event.target.value);
    //     setTodo(event.target.value);
    // }

    function handleAddTodo() {
        if (todo === '') {
            setError('Cannot add empty todo');
        } else {
            
            // mutater det oprindelige array. NONONOOOO!!
            // const newTodos = todos;
            // const newTodo = { id: todos.length + 1, title: todo, completed: false };
            // newTodos.push(newTodo);
            // console.log(newTodos);
            // setTodos(newTodos);

            // opretter et nyt array og tilføjer det nye todo til array'et. YES!
            const newTodoArray = [...todos, {id: todos.length + 1, title: todo, completed: false}]
            setTodos(newTodoArray);
        }
    }



    return (
        <div>
            <div>Add new todo</div>
        <form>
                <input 
                    type="text" 
                    placeholder="Add todo" 
                    value={todo} 
                    onChange={(event) => setTodo(event.target.value)} 
                />
                
                {/* Conditional rendering: Vis kun p-tag hvis error ikke er null */}
                { error !== null && <p style={{color: 'red'}}>{error}</p> }

                <button type="button" onClick={handleAddTodo}>Add todo</button>
            </form>

        </div>
    )
} 

export default AddTodo;

export function add(a,b) {
    return a + b;
}
export function philip(lunch) {
    return lunch + ' with Philip';
}