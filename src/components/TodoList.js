import TodoItem from "./TodoItem";
import { useState } from 'react';


function TodoList() {
    // state: isChristianHappy='getter', setIsChristianHappy='setter'
    const [isChristianHappy, setIsChristianHappy] = useState(true);
    const [todo, setTodo] = useState(''); // what the user sees in the input type="text"
    const [error, setError] = useState(null);
    const [todos, setTodos] = useState([{id: 1, title: "Køb marsvin", completed: false}, 
        {id: 2, title: "Lav en todo list", completed: true}]);


    function handleChristianHappy() {
        // if (!isChristianHappy) {
        //     alert("Christian is happy!!");
        // }
        setIsChristianHappy(!isChristianHappy);
    }

    const handleOnTodoChange = (event) => {
        console.log(event.target.value);
        setTodo(event.target.value);
    }

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
            <h1>Todo List</h1>

            <div>Add new todo</div>
            <form>
                <input type="text" placeholder="Add todo" value={todo} onChange={handleOnTodoChange}/>
                
                {/* Conditional rendering: Vis kun p-tag hvis error ikke er null */}
                { error !== null && <p style={{color: 'red'}}>{error}</p> }

                <button type="button" onClick={handleAddTodo}>Add todo</button>
            </form>

            <button onClick={handleChristianHappy}>Switch Christian Happy</button>
            Is Christian happy? { isChristianHappy.toString() }

            { isChristianHappy && <p>Christian is happy!</p> }

            {
                todos.map(item => {
                    return <TodoItem key={item.id} title={item.title} completed={item.completed}/>
                })
            }
        </div>
    )
}

export default TodoList;