import { useState } from 'react';

// js - destructure - pakker attributter fra et objekt op.
function AddTodo({todos, setTodos}) {
    const [todo, setTodo] = useState(''); // what the user sees in the input type="text"
    const [error, setError] = useState(null);

    // const handleOnTodoChange = (event) => {
    //     console.log(event.target.value);
    //     setTodo(event.target.value);
    // }
    
    // Replace with your Supabase project URL and anon key
    // Udskift denne hardcoded del med context eller props og 'lifting state up'.
    const SUPABASE_URL = 'https://wwvjjkwhffrjwguhujck.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3dmpqa3doZmZyandndWh1amNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDI4NjksImV4cCI6MjA0NzA3ODg2OX0.DvCX5pgFXibncVAyEFCkPirinO1465v4rlgT6ml-YJI';
    const jwt = "eyJhbGciOiJIUzI1NiIsImtpZCI6IjZ2T25LY3VoZVQxbkJlaGIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3d3dmpqa3doZmZyandndWh1amNrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1Njk3ZDQ2Yi0yZDBlLTQ5MTUtOWRmNi0yYjQ2YjdmNDQ2NTYiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzMyMTA5MTA5LCJpYXQiOjE3MzIxMDU1MDksImVtYWlsIjoia2lyc0BjcGhidXNpbmVzcy5kayIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJraXJzQGNwaGJ1c2luZXNzLmRrIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6IjU2OTdkNDZiLTJkMGUtNDkxNS05ZGY2LTJiNDZiN2Y0NDY1NiJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzMyMTA1NTA5fV0sInNlc3Npb25faWQiOiIyYjAzZDZlNS1kYjI1LTQ1ODUtYWIwYy01ZmI0N2EyMzc0ZTUiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.FzUqkg6ShfpbR2ahcq2FIZHfrRZwJ-OcOTp9ArunCbg";
    const userId = "5697d46b-2d0e-4915-9df6-2b46b7f44656";

    async function createTodo() {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/todos`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({text: todo, completed: false, user_id: userId})
        })

        console.log(response);
        
        const data = await response.json();
        console.log(data);
        console.log("Sofie");
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
            // createTodo() // Vi venter ikke på svar fra server men tilføjer data lokalt.
            // const newTodoArray = [...todos, {id: todos.length + 1, title: todo, completed: false}]
            // setTodos(newTodoArray);
            // console.log("Filip");


            // Vi venter på svar fra server (supabase) før vi gemmer data lokalt.
            createTodo().then(() => {
                const newTodoArray = [...todos, {id: todos.length + 1, title: todo, completed: false}]
                setTodos(newTodoArray);
                console.log("Filip");
            });
            
            
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