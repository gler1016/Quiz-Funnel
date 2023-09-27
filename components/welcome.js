import { useRouter } from "next/router";
import { useState } from "react";

const Welcome = (props)=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false)
    const router  = useRouter();
    const handleName =(e)=>{
        setName(e.target.value);
    }
    const handleEmail =(e)=>{
        setEmail(e.target.value);
    }
    const handlesubmit = ()=>{
        if(!name || !email){
            setShow(true);
            return;
        }
        localStorage.setItem('userName',name);
        localStorage.setItem('userEmail',email);
        router.push('/quiz');
    }
    return <>
    <div className="container-1">
        <p className="constainer-text-1">Quiz funnel</p>
    </div>
    
    <div className="container-2">
        <h1 className="container-2-text-h1">Welcome to <span className="h1-span">Quiz Funnel</span> - Your Ultimate Quiz Destination</h1>
    </div>

    <div className="input-container">
        <p style={{fontSize:"20px", textAlign:"center"}}>Sign up for a free account to access a world of quizzes</p>
        <input placeholder="Enter your name" type="text" name="name" value={name} onChange={handleName}/>
        <input placeholder="Enter your email"type="text" name="email" value={email} onChange={handleEmail}/>
        <button onClick={handlesubmit} style={{cursor:"pointer"}}>Get Started</button>
        {show && <p style={{color:"red", textAlign:"center"}}>Please enter name and email first.</p>}
    </div>
    
    </>

}

export default Welcome;