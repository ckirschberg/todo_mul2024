import { useState } from "react";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://wwvjjkwhffrjwguhujck.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3dmpqa3doZmZyandndWh1amNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDI4NjksImV4cCI6MjA0NzA3ODg2OX0.DvCX5pgFXibncVAyEFCkPirinO1465v4rlgT6ml-YJI";
const supabase = createClient(supabaseUrl, supabaseKey)

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signUpNewUser() {
        console.log("sending to supabase", email, password);
        
        const { data, error } = await supabase.auth.signInWithPassword(
            { email: email, password: password,
        //   options: {
        //     emailRedirectTo: 'https://example.com/welcome',
        //   },
        })
        console.log("data", data);
        console.log("error", error);
        
      }

    const handleSignup = (event) => {
        event.preventDefault();
        console.log(email, password);
        signUpNewUser();
    }
    
    return (
        <div>
            <h1>Signup</h1>
            <form>
                <input type="text" placholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" onClick={handleSignup}>Signup</button>
            </form>
        </div>
    )
}

export default Signup;