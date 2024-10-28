import TodoItem from "./TodoItem";
import { useState } from 'react';


function TodoList() {
    // state: isChristianHappy='getter', setIsChristianHappy='setter'
    const [isChristianHappy, setIsChristianHappy] = useState(true);

    const todos = [{id: 1, title: "Køb marsvin", completed: false}, 
        {id: 2, title: "Gå tur med hunden", completed: false},
        {id: 3, title: "Køb aftensmad", completed: false},
        {id: 4, title: "Lav en todo list", completed: true}
    ]

    function handleAddTodo() {
        // if (!isChristianHappy) {
        //     alert("Christian is happy!!");
        // }
        setIsChristianHappy(!isChristianHappy);
    }

    return (
        <div>
            <h1>Todo List</h1>

            <div>Add new todo</div>
            <button onClick={handleAddTodo}>Add todo</button>
            Is Christian happy? { isChristianHappy.toString() }

            {
                todos.map(item => {
                    return <TodoItem key={item.id} title={item.title} completed={item.completed}/>
                })
            }
        </div>
    )
}

export default TodoList;