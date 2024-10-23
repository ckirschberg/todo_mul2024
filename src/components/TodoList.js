import TodoItem from "./TodoItem";


function TodoList() {

    const todos = [{id: 1, title: "Køb marsvin", completed: false}, 
        {id: 2, title: "Gå tur med hunden", completed: false},
        {id: 3, title: "Køb aftensmad", completed: false},
        {id: 4, title: "Lav en todo list", completed: true}
    ]

    return (
        <div>
            <h1>Todo List</h1>

            {
                todos.map(item => {
                    return <TodoItem key={item.id} title={item.title} completed={item.completed}/>
                })
            }
        </div>
    )
}

export default TodoList;