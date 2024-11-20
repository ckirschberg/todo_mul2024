import TodoItem from "./TodoItem";
import { useEffect, useState } from 'react';
import AddTodo from './AddTodo'; 
import { add, philip } from './AddTodo'; // import to functioner




function TodoList() {
    // state: isChristianHappy='getter', setIsChristianHappy='setter'
    const [isChristianHappy, setIsChristianHappy] = useState(true);
    const [todos, setTodos] = useState([
        {id: 1, title: "Køb marsvin", completed: false, deadline: new Date(2024, 9, 30, 12, 0, 0), image: 'https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg'}, 
        {id: 2, title: "Lav en todo list", completed: true, deadline: new Date(2024, 8, 30, 12, 0, 0), image: 'https://omnitail.net/wp-content/uploads/2021/06/amazon-clothes-titlecards.png'}
    ]);

    // Replace with your Supabase project URL and anon key
    // Udskift denne hardcoded del med context eller props og 'lifting state up'.
    const SUPABASE_URL = 'https://wwvjjkwhffrjwguhujck.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3dmpqa3doZmZyandndWh1amNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDI4NjksImV4cCI6MjA0NzA3ODg2OX0.DvCX5pgFXibncVAyEFCkPirinO1465v4rlgT6ml-YJI';
    const jwt = "eyJhbGciOiJIUzI1NiIsImtpZCI6IjZ2T25LY3VoZVQxbkJlaGIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3d3dmpqa3doZmZyandndWh1amNrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1Njk3ZDQ2Yi0yZDBlLTQ5MTUtOWRmNi0yYjQ2YjdmNDQ2NTYiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzMyMTA5MTA5LCJpYXQiOjE3MzIxMDU1MDksImVtYWlsIjoia2lyc0BjcGhidXNpbmVzcy5kayIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJraXJzQGNwaGJ1c2luZXNzLmRrIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6IjU2OTdkNDZiLTJkMGUtNDkxNS05ZGY2LTJiNDZiN2Y0NDY1NiJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzMyMTA1NTA5fV0sInNlc3Npb25faWQiOiIyYjAzZDZlNS1kYjI1LTQ1ODUtYWIwYy01ZmI0N2EyMzc0ZTUiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.FzUqkg6ShfpbR2ahcq2FIZHfrRZwJ-OcOTp9ArunCbg";
    
    async function getTodos() {
        // kalder supabase REST api, todos tabellen. 
        const response = await fetch(`${SUPABASE_URL}/rest/v1/todos`, {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${jwt}`,
          },
        });
        // Konverterer resultat fra json til et objekt
        const data = await response.json();
        console.log(data);

        // console.log("Hej Christian. Filip og Sofie snakker i timen!");
        
        setTodos(data); // opdaterer state med data fra supabase
    }
    
    // useEffect kører når komponenten er loaded. Og kører ikke igennem hver gang.
    useEffect(() => {
        getTodos();    
    }, []);
    // Det tomme array betyder at den kun kører 1 gang.
    // Tilføjer vi en variabel (eller flere, med komma-separering), så kører den hver gang den ændres.

    

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