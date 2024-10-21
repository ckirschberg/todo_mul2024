import TodoItem from "./TodoItem";

function TodoList() {
    return (
        <div>
            <h1>Todo List</h1>
            <TodoItem title="Køb marsvin"/>
            <TodoItem title="Køb mad til marsvin"/>
            <TodoItem title="For guds skyld, husk også bur til marsvin"/>
        </div>
    )
}

export default TodoList;