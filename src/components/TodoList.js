import TodoItem from "./TodoItem";
import { useState } from 'react';
import AddTodo from './AddTodo'; 
import { add, philip } from './AddTodo'; // import to functioner



function TodoList() {
    // state: isChristianHappy='getter', setIsChristianHappy='setter'
    const [isChristianHappy, setIsChristianHappy] = useState(true);
    const [todos, setTodos] = useState([{id: 1, title: "Køb marsvin", completed: false}, 
        {id: 2, title: "Lav en todo list", completed: true}]);


    function handleChristianHappy() {
        // if (!isChristianHappy) {
        //     alert("Christian is happy!!");
        // }
        setIsChristianHappy(!isChristianHappy);
    }

    
    return (
        <div>
            <h1>Todo List</h1>

            
            <AddTodo todos={todos} setTodos={setTodos}/>

            
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