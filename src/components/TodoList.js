import TodoItem from "./TodoItem";
import { useState } from 'react';
import AddTodo from './AddTodo'; 
import { add, philip } from './AddTodo'; // import to functioner



function TodoList() {
    // state: isChristianHappy='getter', setIsChristianHappy='setter'
    const [isChristianHappy, setIsChristianHappy] = useState(true);
    const [todos, setTodos] = useState([
        {id: 1, title: "Køb marsvin", completed: false, deadline: new Date(2024, 9, 30, 12, 0, 0), image: 'https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg'}, 
        {id: 2, title: "Lav en todo list", completed: true, deadline: new Date(2024, 8, 30, 12, 0, 0), image: 'https://omnitail.net/wp-content/uploads/2021/06/amazon-clothes-titlecards.png'}
    ]);


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
                    return <TodoItem 
                        key={item.id} 
                        title={item.title} 
                        completed={item.completed}
                        deadline={item.deadline}
                        image={item.image}
                    />
                })
            }
        </div>
    )
}

export default TodoList;